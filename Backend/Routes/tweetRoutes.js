const express = require('express');
const { uploadTweet } = require('../Controller/postController');



const router = express.Router();

router.post("/upload-tweet", uploadTweet);


module.exports = router;