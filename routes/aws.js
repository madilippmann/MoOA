const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, validationResult, postValidator, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')
const { createUploadURL } = require('../s3');


router.get('/s3Url', async (req, res) => {
    const url = await createUploadURL();
    res.send({url})
})

router.post('/add-image', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {

  const user_id = req.session.auth.userId;

  const { path, title, description } = req.body

  console.log("PATH: ", path);

  const newImage = await db.Post.create({
    user_id,
    title,
    path,
    description
  })

  res.json(newImage)
}))


module.exports = router;
