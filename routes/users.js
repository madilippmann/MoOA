const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, userValidators, loginValidators, userEditValidators, validationResult, grabCommentCount, grabFollows, grabLikes } = require('./utils')
const db = require('../db/models');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser, requireAuth } = require('../auth');

// true for logged in , false for logged out
// const userStatus = res.locals.authenticated



router.get('/login', csrfProtection, function (req, res, next) {

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  res.render('login', {
    csrfToken: req.csrfToken(),
    title: "Login",
    sessionUsername
  })
});



router.post('/login', loginValidators, csrfProtection, asyncHandler(async function (req, res, next) {

  const { email, password } = req.body
  let errors = [];

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

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
    sessionUsername,
  })

}));


router.get('/signup', csrfProtection, function (req, res, next) {

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  res.render('signup', {
    csrfToken: req.csrfToken(),
    title: "Sign Up",
    user: {},
    sessionUsername
  })

});

router.post('/signup', userValidators, csrfProtection, asyncHandler(async function (req, res, next) {
  // if validators fail

  const { firstName, lastName, username, email, password } = req.body

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

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
      errors,
      sessionUsername,
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

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  const username = req.params.username
  let user;
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId
    user = await db.User.findByPk(req.session.auth.userId)
  } else {
    userId = -1;
  }

  const artist = await db.User.findOne({
    where: {username}
  })

  if (artist) {
    //GRAB all the users posts

    const posts = await db.Post.findAll({
      where: {user_id: artist.id},
      order: [['updatedAt', 'DESC']]
    }
    )

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

    if (req.session.auth) {
      res.render('artist-profile', {
        user,
        artist,
        posts,
        userId,
        counts,
        sessionUser: req.session.auth.userFirstName,
        sessionUsername
      })
    } else {


      res.render('artist-profile', {
        user,
        artist,
        posts,
        userId,
        counts,
        sessionUsername,
      })
    }
  } else {
    next()
  }


}))



router.get('/:username/edit', csrfProtection,  asyncHandler(async (req, res, next) => {

 

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  // const username = req.params.username
  let user;
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId
    user = await db.User.findByPk(userId)
  } else {
    userId = -1;
  }

  // const artist = await db.User.findOne({
  //   where: {username}
  // })

  if (user) {
    if (req.session.auth) {
      res.render('edit-user', {
        user,
        // artist,
        userId,
        sessionUser: req.session.auth.userFirstName,
        sessionUsername,
        csrfToken: req.csrfToken()
      })
    } 
  } else {
    const err = new Error('Page Not Found')
    next(err)
  }

}))


router.post('/:username/edit',requireAuth, userEditValidators, csrfProtection, asyncHandler(async (req, res, next) => {

  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  const userId = req.session.auth.userId
  const { firstName, lastName } = req.body
  const user = await db.User.findByPk(userId);

  user.firstName = firstName;
  user.lastName = lastName;
  user.user_id = userId
  
  if (user.user_id === userId) {

      const validatorErrors = validationResult(req);

      if (validatorErrors.isEmpty()) {

          await user.save();
          res.redirect(`/${sessionUsername}`)

      } else {
          const errors = validatorErrors.array().map(error => error.msg);

          res.render('edit-user', {
            user,
            errors,
            sessionUser: req.session.auth.userFirstName,
            sessionUsername,
            csrfToken: req.csrfToken()
          })
      }

  } else {
      const err = new Error('Page Not Found')
      next(err)
  }
}))


router.get('/:username/avatar/edit', csrfProtection,  asyncHandler(async (req, res, next) => {


  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }

  // const username = req.params.username
  let user;
  let userId;
  if (req.session.auth) {
    userId = req.session.auth.userId
    user = await db.User.findByPk(userId)
  } else {
    userId = -1;
  }

  // const artist = await db.User.findOne({
  //   where: {username}
  // })

  if (user) {
    if (req.session.auth) {
      res.render('edit-avatar', {
        user,
        userId,
        sessionUser: req.session.auth.userFirstName,
        sessionUsername,
        csrfToken: req.csrfToken()
      })
    } 
  } else {
    const err = new Error('Page Not Found')
    next(err)
  }

}))



router.post('/:username/avatar/edit', csrfProtection,  asyncHandler(async (req, res, next) => {


  let sessionUsername;
  if (req.session.auth) {
    sessionUsername = req.session.auth.username;
  }
   
  // const username = req.params.username
  let user;
  let userId;
  const { path } = req.body 
  if (req.session.auth) {
    userId = req.session.auth.userId
    user = await db.User.findByPk(userId)
  } else {
    userId = -1;
  }

  // const artist = await db.User.findOne({
  //   where: {username}
  // })

  if (user) {
    if (req.session.auth) {
      user.avatar_path = path
      await user.save()
      res.json(user)
    } 
  } else {
    const err = new Error('Page Not Found')
    next(err)
  }

}))



module.exports = router;
