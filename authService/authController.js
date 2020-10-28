const authService = require('./authService')

class AuthController {
    async registration(req, res) {
        const {username, password} = req.body
    }

    async auth(req, res) {

    }

    async getUserByToken(req, res) {

    }
}

module.exports = new AuthController()
