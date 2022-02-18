const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes, commentValidator } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth');

router.post(`/posts/:postId`, 
    requireAuth,
    csrfProtection,
    commentValidator,
    asyncHandler( async(req, res, next) => {

    const { comment } = req.body;

    const postId = parseInt(req.params.postId, 10);
    const post = await db.Post.findByPk(postId, {
        include: db.User
    });
    
    const comments = await db.Comment.findAll({
        where: { post_id: post.id },
        include: db.User
    })

    if (req.session.auth) {
        const userId = req.session.auth.userId;

        const newComment = db.Comment.build({ 
            post_id: postId,
            user_id: userId,
            comment
        })

        const likesCount = await grabLikes(postId);

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await newComment.save();

            res.redirect(`/posts/${postId}`)
        } else {
            const errors = validatorErrors.array().map(error => error.msg);
            
            res.render("post", { 
                csrfToken: req.csrfToken(),
                title: post.title, 
                errors, 
                comments, 
                likesCount,
                post,
            })
        }
    } else {
        return res.redirect("/login");
    }

    
}))

module.exports = router;