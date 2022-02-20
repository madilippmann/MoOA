const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')

router.put('/', requireAuth, asyncHandler(async (req, res, next) => {

    const { postId } = req.body;

    const like = await db.Like.findOne({
        where: {
            post_id: postId,
            user_id: req.session.auth.userId
        }
    })

    let newLike;

    if (like) {
        await like.destroy()
    } else {
        newLike = await db.Like.create({
            post_id: postId,
            user_id: req.session.auth.userId
        });
    }

    res.json({newLike})

}))

module.exports = router;
