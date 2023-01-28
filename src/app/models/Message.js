const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: Array,
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Message', MessageSchema);