const express=require('express');
const userMiddleware = require("../middleware/userMiddleware");
const TimeFunction = require("../controllers/Timecontro");

const TimeRouter = express.Router()

TimeRouter.post('/time',userMiddleware, TimeFunction );



module.exports=TimeRouter;