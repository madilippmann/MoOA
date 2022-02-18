const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')

router.post('/', asyncHandler(async (req, res, next) => {
    const { postId } = req.body;
    const like = await db.Like.create({
        post_id: postId,
        user_id: req.session.auth.userId
    });

    res.json({like})

}))

router.delete('/', asyncHandler(async (req, res, next) => {
    const { postId } = req.body;
    const like = await db.Like.findByPk({
        where: { postId }
    });

    if (like) {
        await like.destroy();
        res.status(204).end();
    } else {
        const err = new Error('like not found');
        next(err);
    }

}))



module.exports = router;
