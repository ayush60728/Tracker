const mongoose =require('mongoose');
require("dotenv").config();

async function main() {
    await mongoose.connect(process.env.DB_CONNECT)
    console.log("connected to db")
}

module.exports = main;
