const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

// Task 6: Filtering on category with database logic
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("items");
        
        let query = {};
        // Filtering logic based on category
        if (req.query.category) {
            query.category = req.query.category;
        }

        const items = await collection.find(query).toArray();
        res.status(200).json(items);
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
