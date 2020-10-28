const authService = require('./authService')
const User = require('./user')

class AuthController {
    async registration(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.create({username, password})
            const list = await User.findAll()
            res.json(list)
        } catch (e) {
            console.log(e)
        }

    }

    async auth(req, res) {

    }

    async getUserByToken(req, res) {

    }
}

module.exports = new AuthController()
