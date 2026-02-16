const express = require("express");
const app = express()
require("dotenv").config();
const main = require('../config/database.js')
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
const authRouter = require("../Routes/userAuth");
const { register , login , logout} = require("../controllers/userAuthent");
app.use('/user',authRouter);



















main().then(
    async () => {
        app.listen(process.env.PORT, () => {
            console.log("Started listening PORT number " + process.env.PORT);
        })
    })
.catch(err => console.log ("Error occured: " + err));