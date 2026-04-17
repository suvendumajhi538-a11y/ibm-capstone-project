const express = require('express');
const router = express.Router();
router.post('/register', (req, res) => { res.send("Registered"); });
router.post('/login', (req, res) => { res.send("Logged in"); });
router.put('/update', (req, res) => { res.send("Updated"); });
module.exports = router;
