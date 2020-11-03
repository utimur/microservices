const redisModule = require('redis')

const redisConfig = {
    host: process.env.REDIS_PORT_6379_TCP_ADDR || 'redis',
    port: process.env.REDIS_PORT_6379_TCP_PORT || 6379
};

const redis = redisModule.createClient(redisConfig.port, redisConfig.host);

module.exports = redis
