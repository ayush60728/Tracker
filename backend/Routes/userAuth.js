const express = require("express");
const authRouter = express.Router();
const { register , login , logout} = require("../controllers/userAuthent");
const userMiddleware = require("../middleware/userMiddleware");
const Allmeal = require("../controllers/aicontroller");
const aiRouter = require("./aiRoute");


// register
authRouter.post('/register', register);
authRouter.post('/login',login);
authRouter.post('/logout',userMiddleware, logout);


module.exports = authRouter;