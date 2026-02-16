const express = require("express");
const authRouter = express.Router();
const { register , login , logout} = require("../controllers/userAuthent");
const userMiddleware = require("../middleware/userMiddleware");

// register
authRouter.post('/register', register);
authRouter.post('/login',login);
authRouter.post('/logout',userMiddleware, logout);
// authRouter.post('/getprofile', getprofile);

module.exports = authRouter;