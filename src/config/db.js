import mongoose from 'mongoose';
require('dotenv').config()
dotenv.config()

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

export { connectDb };
