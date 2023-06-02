require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.DB_URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log('DB connected');
  } catch (error) {
    // console.log(error);
  }
};

module.exports = dbConnection;
