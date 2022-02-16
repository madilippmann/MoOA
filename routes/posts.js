const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler, userValidators, loginValidators, validationResult } = require('./utils')
const db = require('../db/models');
const { requireAuth } = require('../auth')

router.get('/create', requireAuth, csrfProtection, (req, res, next) => {
    res.render('create-post', {
        title: 'Create New Post',
        csrfToken: req.csrfToken(),
        post: {}
    })
})

router.post('/', )


module.exports = router;
