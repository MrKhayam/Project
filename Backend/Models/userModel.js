const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        required: [true, "Please enter the name..."],
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please enter the email..."],
    },
    password: {
        type: String,
        default: null,
    }
},
    {
    timestamps: true
}
)



module.exports = mongoose.model("User", userSchema);