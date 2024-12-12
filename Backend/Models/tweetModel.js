const mongoose = require('mongoose');


const tweetSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    caption:{
        type:String,
        required: false,
    },
    content:{
        type:String,
        required:false,
    }
},{
    timpestamps:true,
});

module.exports = mongoose.model('Tweet',tweetSchema);