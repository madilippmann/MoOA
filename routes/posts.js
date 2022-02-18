const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')

router.get('/create', requireAuth, csrfProtection, (req, res, next) => {
    res.render('create-post', {
        title: 'Create New Post',
        csrfToken: req.csrfToken(),
        post: {}
    })
})


router.post('/', postValidator, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

    const { title, imageURL, description } = req.body;

    const userId = req.session.auth.userId

    

    const post = await db.Post.build({
        title,
        user_id: userId,
        path: imageURL,
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
            errors
        })
    }
}))

router.get('/:postId', csrfProtection, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);

    const post = await db.Post.findByPk(postId, {
        include: [ db.User, ]
        // , db.Like, db.Comment
    });

    const comments = await db.Comment.findAll({
        where: { post_id: post.id },
        include: db.User
    })

    if (post) {

        const likesCount = await grabLikes(postId);

        let dateString = post.updatedAt.toString().split(' ')
        dateString = `${dateString[0]} ${dateString[1]} ${dateString[2]} ${dateString[3]}`
        console.log(dateString)
        if (req.session.auth) {
            res.render('post', {
                title: post.title,
                post,
                comments,
                likesCount,
                userId: req.session.auth.userId,
                ownsPost: req.session.auth.userId === post.user_id,
                dateString,
                csrfToken: req.csrfToken()
            })
        } else {
            res.render('post', {
                title: post.title,
                post,
                comments,
                likesCount,
                dateString
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

    if (post && post.user_id === req.session.auth.userId) {
        res.render('edit-post', {
            title: 'Edit Post',
            post,
            csrfToken: req.csrfToken()
        })
    } else {
        const err = new Error('Page Not Found')
        next(err)
    }
}))

router.post('/:postId/edit', postValidator, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

    const postId = parseInt(req.params.postId, 10);
    const { title, imageURL, description } = req.body;
    const post = await db.Post.findByPk(postId);

    post.title = title;
    post.path = imageURL;
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
                errors
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
    console.log(post)
    const user = await db.User.findByPk(req.session.auth.userId)

    if (post && post.user_id === req.session.auth.userId ) {
        await post.destroy();
        //TODO redirect to artists gallery
        res.redirect(`/${user.username}`)
    } else {
        const err = new Error('Post not found.')
        next(err)
    }


}))

module.exports = router;
