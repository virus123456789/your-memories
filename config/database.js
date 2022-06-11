const mongoose = require('mongoose');
const config = require('./default.json');

const db = config.mongoURI;

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log("DB is connect");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;