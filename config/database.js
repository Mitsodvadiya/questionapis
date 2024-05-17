const mongoose = require('mongoose');
require('dotenv').config()
const dbURI = process.env.DB;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,  // Increase the timeout to 30 seconds
  socketTimeoutMS: 45000,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
