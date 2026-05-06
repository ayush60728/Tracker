const { createClient } = require("redis");
require("dotenv").config();

const redisclient = createClient({
    url: process.env.REDIS_URL
});

redisclient.on("error", (err) => {
    console.log("Redis Error:", err.message);
});

module.exports = redisclient;
