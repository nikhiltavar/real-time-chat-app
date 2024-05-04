const crypto = require('crypto');


function generateKey() {
    return crypto.randomBytes(32).toString('hex');
}

// Encrypt a message using AES encryption
function encryptMessage(message, key) {
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), crypto.randomBytes(16));
    let encrypted = cipher.update(message);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}

// Decrypt a message using AES decryption
function decryptMessage(encryptedMessage, key) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), crypto.randomBytes(16));
    let decrypted = decipher.update(Buffer.from(encryptedMessage, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = { generateKey, encryptMessage, decryptMessage };
