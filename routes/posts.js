const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')
const AWS = require('aws-sdk');
const { aws_config } = require('../config');


router.get('/create', requireAuth, csrfProtection, (req, res, next) => {

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }

    res.render('create-post', {
        title: 'Create New Post',
        csrfToken: req.csrfToken(),
        post: {},
        sessionUsername
    })
})


router.post('/', postValidator, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }

    const { title, path, description } = req.body;

    const userId = req.session.auth.userId



    const post = await db.Post.build({
        title,
        user_id: userId,
        path,
        description
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await post.save();

        res.redirect(`/posts/${post.id}`)
    } else {
        const errors = validatorErrors.array().map(error => error.msg);

        res.render('create-post', {
            csrfToken: req.csrfToken(),
            title: "Create New Post",
            post,
            errors,
            sessionUsername
        })
    }
}))

router.get('/:postId', csrfProtection, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);


    const post = await db.Post.findByPk(postId, {
        include: [ db.User, ]
    });

    let liked;
    let follows;

    let sessionUsername;
    if (req.session.auth) {
        sessionUsername = req.session.auth.username;

        liked = await db.Like.findOne({
            where: {
                post_id: postId,
                user_id: req.session.auth.userId
            }
        })

        follows = await db.Follower.findOne({
            where: {
                user_id: post.user_id,
                follower_id: req.session.auth.userId
            }
        })


    }

    const comments = await db.Comment.findAll({
        where: { post_id: post.id },
        include: db.User,
        order: [["id", "DESC"]],
    })

    if (post) {

        const likesCount = await grabLikes(postId);
        const followsCount = await grabFollows(post.user_id)

        let dateString = post.updatedAt.toString().split(' ')
        dateString = `${dateString[0]} ${dateString[1]} ${dateString[2]} ${dateString[3]}`
        // console.log(dateString)
        if (req.session.auth) {
            res.render('post', {
                title: post.title,
                post,
                comments,
                liked,
                likesCount,
                follows,
                followsCount,
                userId: req.session.auth.userId,
                ownsPost: req.session.auth.userId === post.user_id,
                dateString,
                csrfToken: req.csrfToken(),
                sessionUsername,
            })
        } else {
            res.render('post', {
                title: post.title,
                post,
                comments,
                likesCount,
                followsCount,
                dateString,
                sessionUsername,
            })
        }
    } else {
        const err = new Error('Page Not Found')
        next(err);

    }

}))

router.get('/:postId/edit', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

    const postId = req.params.postId;
    const post = await db.Post.findByPk(postId);

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }

    if (post && post.user_id === req.session.auth.userId) {
        res.render('edit-post', {
            title: 'Edit Post',
            post,
            csrfToken: req.csrfToken(),
            sessionUsername,
        })
    } else {
        const err = new Error('Page Not Found')
        next(err)
    }
}))

router.post('/:postId/edit', postValidator, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }

    const postId = parseInt(req.params.postId, 10);
    const { title, description } = req.body;
    const post = await db.Post.findByPk(postId);

    post.title = title;
    post.description = description;

    if (post.user_id === req.session.auth.userId) {

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {

            await post.save();
            res.redirect(`/posts/${postId}`)

        } else {
            const errors = validatorErrors.array().map(error => error.msg);

            res.render('edit-post', {
                csrfToken: req.csrfToken(),
                title: "Edit Post",
                post,
                errors,
                sessionUsername,
            })
        }

    } else {
        const err = new Error('Page Not Found')
        next(err)
    }
}))


router.get('/:postId/delete', requireAuth, asyncHandler(async(req, res, next) => {
    const postId = req.params.postId;

    const post = await db.Post.findByPk(postId);
    const user = await db.User.findByPk(req.session.auth.userId);

    const region = aws_config.region
    const bucketName = aws_config.bucketName
    const accessKeyId = aws_config.accessKeyId
    const secretAccessKey = aws_config.secretAccessKey

    AWS.config.update({
        secretAccessKey,
        accessKeyId,
        region
    })

    const s3 = new AWS.S3()

    let path = post.path.split('/');
    path = path[path.length - 1]

    const params = {
        Bucket: bucketName,
        Key: path
    };

    // Will not delete seed data from seed data bucket.
    // Only uploaded data.

    // s3.deleteObject(params, (data, err) => {
    //     if (err) {
    //         console.log("ERROR: ", err);
    //     } else {
    //         console.log("DATA: ", data);
    //     }
    // });

    s3.deleteObject(params);

    if (post && post.user_id === req.session.auth.userId ) {
        await post.destroy();
        res.redirect(`/${user.username}`)
    } else {
        const err = new Error('Post not found.')
        next(err)
    }


}))

module.exports = router;
