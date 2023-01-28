const express = require('express')
const router = express.Router()

const temporarilyControllers = require('../app/controllers/TemporarilyControllers')

router.post('/signup', temporarilyControllers.signup)
router.post('/sendSMS', temporarilyControllers.sendSMS)
router.get('/sendRejection', temporarilyControllers.sendRejection)
router.get('/', temporarilyControllers.show)

module.exports = router