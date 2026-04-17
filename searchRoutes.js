const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const category = req.query.category;
    // Filtering on category as required by Task 6
    if (category) {
        res.json({ message: `Filtering items for category: ${category}` });
    } else {
        res.json({ message: "No category provided" });
    }
});

module.exports = router;
