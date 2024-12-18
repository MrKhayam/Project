const express = require('express');
const { uploadTweet } = require('../Controller/postController');
const authMiddleware = require('../Middleware/authMiddleware');



const router = express.Router();

router.post("/upload-tweet", authMiddleware, uploadTweet);


module.exports = router;