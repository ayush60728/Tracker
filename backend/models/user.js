const mongoose = require("mongoose");
require("dotenv").config();
const { Schema } = mongoose;

const userschema = new Schema({
    email: {
        type: String,   
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        immutable: true,
    },
    password: {
        type: String,   
        required: true,
    }
}, {
    timestamps: true
});


const User = mongoose.model("User", userschema);

module.exports = User; 