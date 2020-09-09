/* eslint-disable no-console */
import mongoose from 'mongoose';

const connectDB = async (dbUri) => {
  try {
    await mongoose.connect(dbUri,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
