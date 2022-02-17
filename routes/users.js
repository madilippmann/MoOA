const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, userValidators, loginValidators, validationResult, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth');

// true for logged in , false for logged out
// const userStatus = res.locals.authenticated



router.get('/login', csrfProtection, function (req, res, next) {
  res.render('login', {
    csrfToken: req.csrfToken(),
    title: "Login",

  })
});



router.post('/login', loginValidators, csrfProtection, asyncHandler(async function (req, res, next) {

  const { email, password } = req.body
  let errors = [];

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({
      where: { email }
    });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

      if (passwordMatch) {
        loginUser(req, res, user);
        return req.session.save(() => {
          res.redirect('/')
        })
      }
    }

    errors.push('Incorrect login credentials')
  } else {

    errors = validatorErrors.array().map(error => error.msg);

  }

  res.render('login', {
    csrfToken: req.csrfToken(),
    title: "Login",
    email,
    errors,
  })

}));


router.get('/signup', csrfProtection, function (req, res, next) {
  res.render('signup', {
    csrfToken: req.csrfToken(),
    title: "Sign Up",
    user: {}
  })

});

router.post('/signup', userValidators, csrfProtection, asyncHandler(async function (req, res, next) {
  // if validators fail

  const { firstName, lastName, username, email, password } = req.body

  const user = await db.User.build({
    firstName,
    lastName,
    username,
    email,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {

    const hashedPassword = await bcrypt.hash(password, 12);

    user.hashedPassword = hashedPassword;

    await user.save();

    loginUser(req, res, user);
    return req.session.save(() => {
      res.redirect('/')
    })


  } else {

    const errors = validatorErrors.array().map(error => error.msg);

    res.render('signup', {
      csrfToken: req.csrfToken(),
      title: "Sign Up",
      user,
      errors
    })

  }
}));


router.get('/signout', (req, res) => {
  logoutUser(req, res)
  req.session.save(() => {
    res.redirect('/')
  })
})


router.get('/demo-user', asyncHandler(async (req, res) => {
  const alec = await db.User.findOne({
    where: {
      username: 'alec_has_a_chair'
    }
  })

  loginUser(req, res, alec);

  req.session.save(() => {
    res.redirect('/')
  })
  // res.send()

}))


//routing for /username

router.get('/:username', asyncHandler(async (req, res, next) => {
  const username = req.params.username
  const user = await db.User.findByPk(req.session.auth.userId)

  const artist = await db.User.findOne({
    where: {username}
  })

  if (artist) {
    //GRAB all the users posts

    const posts = await db.Post.findAll({
      where: {user_id: artist.id}
    })

    let userId;
    if (req.session.auth) {
      userId = req.session.auth.userId
    } else {
      userId = -1;
    }

    // let counts = [];

    // for (let i = 0; i < posts.length; i++) {
    //   const post = posts[i];

    //   let likeCount = await grabLikes(post.id);
    //   // likeCount = String(likeCount);
    //   const commentCount = await grabCommentCount(post.id)

    //   const count = { likeCount, commentCount }
    //   counts.push(count);
    // }

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



    res.render('artist-profile', {
      user,
      artist,
      posts,
      userId,
      counts,
      sessionUser: req.session.auth.userFirstName
    })
  } else {
    next()
  }


}))

module.exports = router;
