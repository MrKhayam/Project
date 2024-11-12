const registerUser = (req, res) => {
    const { name, age } = req.body;
    if (name && age) {
        res.send(`Your name is ${name} and you are ${age} years old.`);
    }
    else {
        throw new Error("Please fill all the fields.");
    }
};

module.exports = { registerUser };
