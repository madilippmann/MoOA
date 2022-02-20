const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, grabLikes, commentValidator } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth');

router.post(`/posts/:postId`, 
    requireAuth,
    csrfProtection,
    commentValidator,
    asyncHandler( async(req, res, next) => {

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }
        
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
                sessionUsername
            })
        }
    } else {
        return res.redirect("/login");
    }
}))


router.get(`/comments/:commentId/edit`, csrfProtection, requireAuth, asyncHandler( async(req, res, next) => {

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }

    const commentId = parseInt(req.params.commentId, 10);
    const commentToEdit = await db.Comment.findByPk(commentId);
    const postId = commentToEdit.post_id;

    if (commentToEdit && commentToEdit.user_id === req.session.auth.userId) {
        res.render("comment-edit", { 
            title: 'Edit Comment', 
            commentToEdit,
            csrfToken: req.csrfToken(),
            sessionUsername,
            postId
        })
    } else {
        const err = new Error("Page Not Found")
        next(err);
    }
}))

router.post(`/comments/:commentId/edit`, csrfProtection, commentValidator, requireAuth, asyncHandler( async(req, res, next) => {

    let sessionUsername;
    if (req.session.auth) {
      sessionUsername = req.session.auth.username;
    }

    const commentId = parseInt(req.params.commentId, 10);
    const commentToEdit = await db.Comment.findByPk(commentId);
    const postId = commentToEdit.post_id;

    const { comment } = req.body;

    commentToEdit.comment = comment;

    if (commentToEdit.user_id === req.session.auth.userId) {

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await commentToEdit.save();
            res.redirect(`/posts/${postId}`);
        } else {
            const errors = validatorErrors.array().map(error => error.msg);
            res.render("comment-edit", { 
                title: 'Edit Comment', 
                commentToEdit,
                csrfToken: req.csrfToken(),
                sessionUsername,
                errors,
                postId
            })
        }
    }
}))

router.get(`/comments/:commentId/delete`, requireAuth, asyncHandler( async(req, res, next) => {
    const commentId = parseInt(req.params.commentId, 10);
    const comment = await db.Comment.findByPk(commentId);

    const postId = comment.post_id;
    const commentOwner = comment.user_id;
    const currentUser = req.session.auth.userId;

    if (comment && commentOwner === currentUser) {
        await comment.destroy();
        res.redirect(`/posts/${postId}`)
    } else {
        const err = new Error("Forbidden operation.")
        err.status = 403;
        next(err);
    }
}))

module.exports = router;