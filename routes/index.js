const express = require('express');
const router = express.Router();
// FIX Grabs seed data from data.js file
const posts = require('../data.js')
const { asyncHandler, grabLikes, grabCommentCount } = require("./utils")
const db = require("../db/models")


/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  console.log(res.locals.authenticated);
  const posts = await db.Post.findAll(
    { 
      order: [
      ['id', 'DESC']],
      limit: 25
  })

  let counts = [];

  for (post of posts) {
    const likesCount = await grabLikes(post.id)
    const commentsCount = await grabCommentCount(post.id)

    const count = {
      likesCount,
      commentsCount
    }
    counts.push(count)
  }


  console.log(posts)
  res.render('home', { 
    title: 'Latest Exhibits', 
    posts,
    counts 
  });
}));

module.exports = router;
