<<<<<<< HEAD
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, dob, password } = req.body;
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new Error("Email already registered!");
  }

  if (name && email && dob && password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const createdUser = await User.create({
        name,
        email,
        dob,
        password: hashedPass,
      });

      res.send(createdUser);
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Please fill all the fields.");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(402);
    throw new Error("Please enter the relevant fields!");
  }

  const checkUser = await User.findOne({ email });

  if (!checkUser) {
    res.status(404);
    throw new Error("Invalid Email!");
  } else {
    const matchPass = await bcrypt.compare(password, checkUser.password);
    if (!matchPass) {
      res.status(402);
      throw new Error("Invalid Password!");
    } else {
      res.send(checkUser);
    }
  }
});

=======
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



>>>>>>> 3d5dc53ef435d6b6a5131be4b29799f0c21c5c79
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

<<<<<<< HEAD
module.exports = { registerUser, loginUser, findMyProfile };
=======





module.exports = {
    registerUser,
    loginUser,
    findMyProfile,
};
>>>>>>> 3d5dc53ef435d6b6a5131be4b29799f0c21c5c79
