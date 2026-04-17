const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');
const multer = require('multer');
const upload = multer();

router.get('/', async (req, res) => {
    const db = await connectToDatabase(); // Call method here
    const collection = db.collection("items");
    const items = await collection.find({}).toArray();
    res.json(items);
});

router.post('/', upload.single('file'), (req, res) => { res.send("Uploaded"); });
router.get('/:id', (req, res) => { res.send("Item Detail"); });
router.delete('/:id', (req, res) => { res.send("Deleted"); });

module.exports = router;
