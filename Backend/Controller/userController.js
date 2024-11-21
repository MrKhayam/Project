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




const loginUser = (req,res) => {
    res.send("User Logged In");
}





module.exports = { registerUser, loginUser };
