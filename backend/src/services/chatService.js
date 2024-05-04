const Message = require('../models/Message');


// Send a message
async function sendMessage(sender, receiver, content) {
    await Message.create({ senderId: sender, receiverId: receiver, content });
}

async function getMessageHistory(sender, receiver) {
    const messages = await Message.findAll({
        where: {
            senderId: sender,
            receiverId: receiver,
        },
        order: [['createdAt', 'ASC']], // Order by creation time
    });
    return messages;
}

module.exports = { sendMessage, getMessageHistory };
