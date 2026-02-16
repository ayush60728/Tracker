const User = require("../models/user");
const validate = require("../utils/Validate");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const register = async (req, res) => {
    validate(req.body);
    try {
        const { email, password } = req.body;
        req.body.password = await bcrypt.hash(password, 10);
        const user = await User.create(req.body);
        const token = jwt.sign({ _id: user._id, email: email }, process.env.JWT_KEY);
        res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 365 }); //1 year
        res.status(201).send("User Registered Successfully");
    }
    catch (err) {
        res.status(400).send("Error: " + err)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email)
            throw new Error("Invalid Credentials");
        if (!password)
            throw new Error("Invalid Credentials");

        const user = await User.findone({ email });

        const match = bcrypt.compare(password, user.password);
        if (!match)
            throw new Error("Invalid Credentials");
        const token = jwt.sign({ _id: user._id, email: email }, process.env.JWT_KEY);
        res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 365 }); //1 year
        res.status(200).send("Logged In Successfully");

    }
    catch (err) {
        res.status(401).send("Error: " + err)
    }
}

const logout =  async(req,res) => {
    try{


    }
    catch{err}{

    }
}

module.exports = { register , login , logout};