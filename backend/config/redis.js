const { createClient } = require('redis');
require("dotenv").config();

const redisclient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16587.crce217.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16587
    }
});


module.exports = redisclient;