const express = require('express');
const router = express.Router();

// API for registration
router.post('/register', (req, res) => {
    res.json({ message: "User registered" });
});

// API for login
router.post('/login', (req, res) => {
    res.json({ message: "Login successful" });
});

// API to update user information
router.put('/update', (req, res) => {
    res.json({ message: "User information updated" });
});

module.exports = router;
