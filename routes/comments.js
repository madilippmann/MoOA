const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')

router.post(`/posts/${post.id}/comments`, asyncHandler( async(req, res, next) => {
    const { comment } = req.body;
}))

module.exports = router;