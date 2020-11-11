const jwt = require('jsonwebtoken');
const {secretKey} = require('../config')

module.exports = (role) => {
    return (req, res, next) => {
        try {
            if (!req.headers.authorization) {
                res.status(403).json({message: "Неавторизованный запрос"})
            }
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token, secretKey)
            let hasRole = user.roles.find(r => r.value == role)
            if (!hasRole) {
                res.status(403).json({message: "Вы не являетесь администратором"})
            }
            next();
        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }
}


