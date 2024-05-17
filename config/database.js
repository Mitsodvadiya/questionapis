const mongoose = require('mongoose');
require('dotenv').config()
const dbURI = process.env.DB;

const options = {
  dbName: process.env.DBNAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, options);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
