const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


async function signUp(username, password) {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user
    const user = await User.create({ username, password: hashedPassword });
    return user;
}

async function signIn(username, password) {
    // Find the user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
        throw new Error('User not found');
    }
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
    return token;
}

module.exports = { signUp, signIn };
