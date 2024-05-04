const authService = require('../services/authService');

// Controller functions for user authentication

// Sign up a new user
async function signUp(req, res) {
    try {
        const { username, password } = req.body;
        const user = await authService.signUp(username, password);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Sign in an existing user
async function signIn(req, res) {
    try {
        const { username, password } = req.body;
        const token = await authService.signIn(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

// Logout a user
async function signOut(req, res) {
    try {
        // Implement logout logic if needed
        res.json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { signUp, signIn, signOut };
