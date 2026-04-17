const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectToDatabase() {
    // This line is strictly required for Task 4
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return client.db("secondChance");
}

module.exports = connectToDatabase;
