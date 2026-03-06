const express = require("express");
const valueRouter = express.Router();
const valuefunction = require("../controllers/ValueController");
const userMiddleware = require("../middleware/userMiddleware");
const valueget = require("../controllers/Valueget");
const valuegraph = require("../controllers/Valuegraph")

valueRouter.post('/store', userMiddleware ,valuefunction);
valueRouter.get('/get', userMiddleware, valueget);
valueRouter.get('/graph', userMiddleware, valuegraph);

module.exports=valueRouter;