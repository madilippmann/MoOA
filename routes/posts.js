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

    console.log("USER ID: ", userId)

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


module.exports = router;
