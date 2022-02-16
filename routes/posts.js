const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator } = require('./utils')
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

router.get('/:postId', asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);

    const post = await db.Post.findByPk(postId, {
        include: [ db.User, ]
        // , db.Like, db.Comment
    });

    const comments = await db.Comment.findAll({
        where: { post_id: post.id}
    })

    if (post) {
        if (req.session.auth) {
            res.render('post', {
                title: post.title,
                post,
                comments,
                userId: req.session.auth.userId,
                ownsPost: req.session.auth.userId === post.user_id
            })
        } else {
            res.render('post', {
                title: post.title,
                post,
                comments
            })
        }
    } else {
        const err = new Error('Page Not Found')
        next(err);
    }

}))


module.exports = router;
