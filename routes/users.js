const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', csrfProtection, function(req, res, next) {
  res.render('login', {
    csrfToken: req.csrfToken(),
    title: "Login",
    user: {},
  })
});


router.post('/login', csrfProtection, asyncHandler(async function(req, res, next) {
  // if validators fail
  if (TODO) {
    res.render('login', {
      csrfToken: req.csrfToken(),
      title: "Login",
      user: {},
    })

    // if validators pass
  } else {
    res.redirect('/')
  }
}));


router.get('/signup', csrfProtection, function(req, res, next) {
  res.render('signup', {
    csrfToken: req.csrfToken(),
    title: "Sign Up",
    user: {},
    errors: []
  })
});

router.post('/signup', csrfProtection, asyncHandler(async function(req, res, next) {
  // if validators fail
  if (TODO) {
    res.render('signup', {
      csrfToken: req.csrfToken(),
      title: "Sign Up",
      user: {}
    })

    // if validators pass
  } else {
    res.redirect('/')
  }
}));


module.exports = router;
