const express=require('express');
const userMiddleware = require("../middleware/userMiddleware");
const aifunction = require('../controllers/aicontroller');
const aiChat = require("../controllers/aiChat")
const aiRouter=express.Router()

aiRouter.post('/ai',userMiddleware, aifunction );
aiRouter.post('/chat', aiChat );


module.exports=aiRouter;