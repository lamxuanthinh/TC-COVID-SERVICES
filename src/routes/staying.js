const express = require('express')
const router = express.Router()

const stayingControllers = require('../app/controllers/StayingControllers')

router.post('/signup', stayingControllers.signup)
router.post('/sendSMS', stayingControllers.sendSMS)
router.get('/sendRejection', stayingControllers.sendRejection)
router.get('/', stayingControllers.show)

module.exports = router