const express = require('express');
const router = express.Router();
// FIX Grabs seed data from data.js file
const posts = require('../data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res.locals.authenticated);
  res.render('home', { title: 'Latest Exhibits' , posts });
});

module.exports = router;
