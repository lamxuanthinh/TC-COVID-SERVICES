const express = require('express')
const router = express.Router()

const messagerControllers = require('../app/controllers/MessagerControllers')

router.post('/', messagerControllers.add)
router.get('/:conversationId', messagerControllers.getData)

module.exports = router