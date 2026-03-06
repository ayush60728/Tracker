require("dotenv").config();
const express = require("express");
const { register, login, logout } = require("../controllers/userAuthent");
const app = express()

const main = require('../config/database.js')
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
const authRouter = require("../Routes/userAuth");
const redisclient = require("../config/redis.js");
const cors = require("cors");
const aiRouter = require("../Routes/aiRoute.js");
const ValueRouter = require("../Routes/ValueDB.js")


app.use(cors({
    origin: "https://mf-frontend-qs7c.onrender.com", 
    credentials: true
}));

app.use('/user', authRouter);
app.use('/api',aiRouter);

app.use('/value',ValueRouter);



const initalizeconnection = async () => {
    try {
        await Promise.all([main(), redisclient.connect()]);
        console.log("Database Connected");

        app.listen(process.env.PORT, () => {
            console.log("Started listening PORT number " + process.env.PORT);
        })
    }
    catch (err) {
        console.error("Error: " + err)
    }
}

initalizeconnection();
