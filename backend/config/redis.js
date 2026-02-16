const { createClient } = require('redis');
require("dotenv").config();

const redisclient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-15050.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 15050
    }
});

module.exports = redisclient;