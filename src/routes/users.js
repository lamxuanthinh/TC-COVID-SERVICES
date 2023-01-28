const express = require('express')
const router = express.Router()

const userControllers = require('../app/controllers/UserControllers')

router.post('/signup', userControllers.signup)
router.get('/', userControllers.show)
router.get('/sendOTP', userControllers.sendQR)

module.exports = router