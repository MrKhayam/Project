const User = require("../Models/userModel")

const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler( async (req, res) => {
    const { name, email, dob, password } = req.body;
    if (name && email && dob && password) {
        try {
            const createdUser = await User.create({
              name,
              email,
              dob,
              password,
            });

            res.send(createdUser)
        } catch (error) {
            console.log(error);
        }
    }
    else {
        throw new Error("Please fill all the fields.");
    }
});

module.exports = { registerUser };
