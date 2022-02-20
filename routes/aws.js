const express = require('express');
const router = express.Router();
const { createUploadURL } = require('../s3');


router.get('/s3Url', async (req, res) => {

  const url = await createUploadURL();
  res.send({url})

})

module.exports = router;
