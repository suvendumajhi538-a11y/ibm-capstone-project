const express = require('express');
const app = express();
const searchRoutes = require('./searchRoutes');

// This serves the search route as required by Task 7
app.use('/api/secondchance/search', searchRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
