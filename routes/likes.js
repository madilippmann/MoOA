const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')



//TODO check if user is logged in


router.put('/', asyncHandler(async (req, res, next) => {

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


// router.post('/', asyncHandler(async (req, res, next) => {
//     console.log(req.body)
//     const { postId } = req.body;
//     console.log("this is post id", postId)

//     const like = await db.Like.findOne({
//         where: {
//             post_id: postId,
//             user_id: req.session.auth.userId
//         }
//     })

//     let newLike;

//     if (!like) {
//         newLike = await db.Like.create({
//             post_id: postId,
//             user_id: req.session.auth.userId
//         });
//     }

//     res.json({newLike})

// }))

// router.delete('/', asyncHandler(async (req, res, next) => {
//     const { postId } = req.body;

//     const like = await db.Like.findOne({
//         where: { post_id: postId, user_id: req.session.auth.userId },

//     });

//     if (like) {
//         await like.destroy();
//         res.status(204).end();
//     } else {
//         const err = new Error('like not found');
//         next(err);
//     }

// }))


// router.post('/', asyncHandler(async (req, res, next) => {
//     console.log(req.body)
//     const { postId } = req.body;
//     console.log("this is post id", postId)
//     const like = await db.Like.create({
//         post_id: postId,
//         user_id: req.session.auth.userId
//     });

//     res.json({like})

// }))

// router.delete('/', asyncHandler(async (req, res, next) => {
//     const { postId } = req.body;
    
//     const like = await db.Like.findOne({
//         where: { post_id: postId, user_id: req.session.auth.userId },
        
//     });

//     if (like) {
//         await like.destroy();
//         res.status(204).end();
//     } else {
//         const err = new Error('like not found');
//         next(err);
//     }

// }))



module.exports = router;
