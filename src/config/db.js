import mongoose from 'mongoose';
import { config } from './env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log(`[${config.env.toUpperCase()}] Connected to MongoDB: ${config.mongoUri}`);
  } catch (error) {
    console.error(`[${config.env.toUpperCase()}] MongoDB connection error:`, error.message);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
  console.log(`[${config.env.toUpperCase()}] Disconnected from MongoDB`);
};
