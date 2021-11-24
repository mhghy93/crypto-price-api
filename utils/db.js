const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://mh:uFMNoOnzaOZ8Bc5B@cluster0.f7di2.mongodb.net/crypto-currency?retryWrites=true&w=majority';
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
