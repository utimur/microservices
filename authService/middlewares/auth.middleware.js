const jwt = require('jsonwebtoken');
const {secretKey} = require('../config')

module.exports = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(403).json({message: "Неавторизованный запрос"})
        }
        const token = req.headers.authorization.split(' ')[1]
        const data = jwt.verify(token, secretKey)
        req.user = data
        next()
    } catch (e) {
        console.log(e)
        res.status(400).json(e.message)
    }
}
