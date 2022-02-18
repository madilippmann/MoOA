const express = require('express');
const router = express.Router();
const { asyncHandler, grabLikes, grabCommentCount, sessionUsername } = require("./utils")
const db = require("../db/models");
const { requireAuth } = require('../auth.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  console.log(res.locals.authenticated);
  const posts = await db.Post.findAll(
    {
      include: db.User,
      order: [
      ['id', 'DESC']],
      limit: 25
  })

  let counts = [];

  for (let post of posts) {
    const likesCount = await grabLikes(post.id)
    const commentsCount = await grabCommentCount(post.id)

    if (post.title.length > 20) {
      post.title = `${post.title.split('').slice(0, 20).join('')}...`
    }

    const count = {
      likesCount,
      commentsCount
    }
    counts.push(count)
  }

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  res.render('home', {
    title: 'Latest Exhibits',
    posts,
    counts,
    sessionUsername
  });
}));



router.get('/feed', requireAuth, asyncHandler(async (req, res, next) => {
  const userId = req.session.auth.userId;

  const follows = await db.Follower.findAll({
    where: { follower_id: userId },
  })

  const followedIds = follows.map(follow => follow.user_id)

  // console.log(followedIds);

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  const posts = await db.Post.findAll({
    where: { user_id: {
      [Op.in]: followedIds
    }},
    order: [
      ['id', 'DESC']
    ],
    limit: 25,
    include: db.User
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


  res.render('feed', {
    title: `${req.session.auth.firstName}'s Feed`,
    posts,
    counts,
    sessionUsername
  })

}))

module.exports = router;
