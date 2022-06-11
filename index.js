const express = require('express');
const connectDb = require('./config/database');

const app = express();

connectDb();

app.get('/', (req, res) => {
    res.send("API running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})