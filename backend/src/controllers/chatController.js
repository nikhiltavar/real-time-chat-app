const chatService = require('../services/chatService');

// Controller functions for chat functionalities

// Send a message
async function sendMessage(req, res) {
    try {
        const { sender, receiver, message } = req.body;
        await chatService.sendMessage(sender, receiver, message);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get message history between two users
async function getMessageHistory(req, res) {
    try {
        const { sender, receiver } = req.query;
        const messages = await chatService.getMessageHistory(sender, receiver);
        res.json({ messages });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { sendMessage, getMessageHistory };
