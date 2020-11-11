const Router = require('express');
const router = new Router()
const authController = require('./authController')
const authMiddleware = require('./middlewares/auth.middleware')
const rolesMiddleware = require('./middlewares/roles.middleware')
const ipMiddleware = require('./middlewares/ip.middleware')

router.post('/registration', authController.registration)
router.post('/login', ipMiddleware, authController.auth)
router.get('/auth', authMiddleware, authController.getUserByToken)
router.get('/all',rolesMiddleware('admin'), authController.getAllUsers)
router.get('/connections', authMiddleware, authController.getConnections)

module.exports = router
