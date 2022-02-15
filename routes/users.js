const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, userValidators, loginValidators, validationResult } = require('./utils')
const db = require('../db/models');
const bcrypt = require('bcryptjs');
const { loginUser } = require('../auth');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.get('/login', csrfProtection, function(req, res, next) {
  res.render('login', {
    csrfToken: req.csrfToken(),
    title: "Login",

  })
});



router.post('/login', loginValidators, csrfProtection, asyncHandler(async function(req, res, next) {

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
        return res.redirect('/')
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
    errors
  })

}));


router.get('/signup', csrfProtection, function(req, res, next) {
  res.render('signup', {
    csrfToken: req.csrfToken(),
    title: "Sign Up",
    user: {}
  })

});

router.post('/signup', userValidators, csrfProtection, asyncHandler(async function(req, res, next) {
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

      res.redirect('/');

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


module.exports = router;
