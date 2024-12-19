const asyncHandler = require('express-async-handler');
const Tweet = require('../Models/tweetModel');


const uploadTweet = asyncHandler(async (req, res) => {
    const { caption, content } = req.body;
    try {
        const newTweet = await Tweet.create({
            user: req.user._id,
            caption,
            content,
        });
        res.send(newTweet);
    } catch (error) {
        throw new Error(error);
    }

});


module.exports = { uploadTweet };