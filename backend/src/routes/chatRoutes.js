const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


// Send a message
router.post('/send-message', chatController.sendMessage);

// Get message history between two users
router.get('/message-history', chatController.getMessageHistory);

module.exports = router;
