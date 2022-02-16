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
        include: [ db.User ]
        // , db.Like, db.Comment
    });

    if (post) {
        res.render('post', {
            title: post.title,
            post
        })
    } else {
        res.render('page-not-found')
    }

}))


module.exports = router;
