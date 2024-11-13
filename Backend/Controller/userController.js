const registerUser = (req, res) => {
    const { name, age, dob } = req.body;
    if (name && age && dob) {
        res.json({
            name: name,
            age: age,
            dob : dob,
        })
    }
    else {
        throw new Error("Please fill all the fields.");
    }
};

module.exports = { registerUser };
