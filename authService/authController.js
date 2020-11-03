const authService = require('./authService')
const redis = require('./cashe')

class AuthController {
    async registration(req, res) {
        try {
            const {username, password} = req.body
            const user = await authService.createUser(username, password)
            return res.json(user)
        } catch (e) {
            return res.json({message:e.message})
        }
    }

    async auth(req, res) {
        try {
            const {username, password} = req.body
            const user = await authService.login(username, password)
            return res.json(user)
        } catch (e) {
            return res.json({message:e.message})
        }
    }

    async getUserByToken(req, res) {
        try {
            const user = await authService.getUser(req.user.id)
            return res.json(user)
        } catch (e) {
            return res.json({message:e.message})
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await authService.getAll()
            return res.json(users)
        } catch (e) {
            return res.json(e.message)
        }
    }

    async getConnections(req, res) {
        try {
            redis.get(req.user.username, (err, data) => {
                res.json(JSON.parse(data));
            })
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new AuthController()
