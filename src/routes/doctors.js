const express = require('express')
const router = express.Router()

const doctorControllers = require('../app/controllers/DoctorControllers')

router.post('/signup', doctorControllers.signup)
router.post('/login', doctorControllers.login)
router.post('/sendSMS', doctorControllers.sendSMS)
router.put('/02/:IdCard', doctorControllers.finish)
router.get('/', doctorControllers.show)

module.exports = router