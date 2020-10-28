const Router = require('express');
const router = new Router()
const authController = require('./authController')

router.post('/registration', authController.registration)
router.post('/login', authController.auth)
router.get('/auth', authController.getUserByToken)

module.exports = router
