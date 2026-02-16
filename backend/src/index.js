const express = require("express");
const { register, login, logout } = require("../controllers/userAuthent");
const app = express()
require("dotenv").config();
const main = require('../config/database.js')
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
const authRouter = require("../Routes/userAuth");
const redisclient = require("../config/redis.js");

app.use('/user', authRouter);



























const initalizeconnection = async () => {
    try {
        await Promise.all([main(), redisclient.connect()]);
        console.log("Database Connected");

        app.listen(process.env.PORT, () => {
            console.log("Started listening PORT number " + process.env.PORT);
        })
    }
    catch(err){
        res.status(401).send("Error: " + err)
    }
}

initalizeconnection();