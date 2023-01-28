const express = require('express')
const router = express.Router()
const conversationController = require('../app/controllers/ConversationControllers');
// new conversation

router.post('/', conversationController.newConversation);
router.get('/:userId', conversationController.getConversation);

module.exports = router;