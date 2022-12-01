import mongoose from 'mongoose';
require('dotenv').config()

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = { connectDb };
