const redis = require('../cashe')

module.exports = async (req, res, next) => {
    try {
        const ip = req.clientIp
        const username = req.body.username
        console.log('username', username)
        const found = await redis.get(username, (err, data) => {
            let json = JSON.parse(data)
            json = json ? json : []
            json.push(`${username} пытался войти/вошёл ${new Date()} с ip-адресса ${ip}`)
            redis.set(username, JSON.stringify(json))
            next()
        })

    } catch (e) {
        return res.status(500).json({message: e.message})
    }
}
