const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const connectToDatabase = require('./db');

// POST method for file upload
router.post('/', upload.single('file'), async (req, res) => {
    res.send("File uploaded");
});

// GET all items
router.get('/items', async (req, res) => {
    res.json({ message: "List of items" });
});

// GET item by ID
router.get('/items/:id', async (req, res) => {
    res.json({ message: "Item details" });
});

// DELETE an item
router.delete('/:id', async (req, res) => {
    res.send("Item deleted");
});

module.exports = router;
