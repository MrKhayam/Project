const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    res.status(401);
    throw new Error("Email already registered!");
  }

  if (name && email && password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const createdUser = await User.create({
        name,
        email,
        password: hashedPass,
      });

      res.json({
        _id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        password: createdUser.password,
        token: generateToken(createdUser._id),
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(401);
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
      res.json({
        _id: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        password: createdUser.password,
        token: generateToken(createdUser._id),
      });
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



const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}



module.exports = { registerUser, loginUser, findMyProfile };
