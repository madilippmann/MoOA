const express = require('express');
const router = express.Router();
const { asyncHandler } = require('./utils')
const db = require('../db/models');

router.put('/', asyncHandler(async (req, res, next) => {

  const { username } = req.body;
  const artist = await db.User.findOne({
    where: {
      username: username
    }
  })
  
  const follower = await db.Follower.findOne({
      where: {
          follower_id: req.session.auth.userId,
          user_id: artist.id
      }
  })



  let newFollow;

  if (follower) {
      await follower.destroy()
  } else {
    newFollow = await db.Follower.create({
        follower_id: req.session.auth.userId,
        user_id: artist.id
      });
  }

  res.json({newFollow})

}))

module.exports = router;
