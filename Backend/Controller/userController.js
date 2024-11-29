const asyncHandler = require('express-async-handler');
const User = require('../Models/userModel');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body;
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
        throw new Error("Email already exists!")
    }
    if (!name || !email || !password) {
        throw new Error("Please enter the relevant fields!")
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        const createdUser = await User.create({
          name,
          email,
          password : hashedPass,
        });
        await res.send(createdUser);
    }

});









const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error("Please enter the relevant fields!");
    } else {
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            throw new Error("Invalid email!");
        } else {
            const matchPass = await bcrypt.compare(password, checkUser.password);
            if (!matchPass) {
                throw new Error("Invalid Password!");
            } else {
                res.send(checkUser);
            }
        }

    }
});



const findMyProfile = asyncHandler(async (req, res) => {
  const user_id = req.params.id;
  const foundUser = await User.findOne({ _id: user_id });

  if (!foundUser) {
    res.status(404);
    throw new Error("User not found!");
  } else {
    res.send(foundUser);
  }
});






module.exports = {
    registerUser,
    loginUser,
    findMyProfile,
};
