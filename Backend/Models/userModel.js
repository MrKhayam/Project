const mongoose = require('mongoose');

<<<<<<< HEAD
const userSchema = mongoose.Schema({
    name: {
        required: [true, "Please enter the name..."],
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please enter the email..."],
    },
    dob: {
        type: String,
        required: true,
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

=======

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name..."],
  },
  email: {
    type: String,
    required: [true, "Enter your email..."],
  },
  password: {
    type: String,
    required: [true, "Enter your password..."],
  },
}, {
    timestamps : true,
});
>>>>>>> 3d5dc53ef435d6b6a5131be4b29799f0c21c5c79


module.exports = mongoose.model("User", userSchema);