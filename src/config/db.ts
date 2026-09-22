import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI || process.env.MONGO_URL;

    if (!mongoURI) {
      console.error('❌ Error: MONGO_URI environment variable is not defined!');
      console.error('👉 Please set MONGO_URI in your Render Dashboard under Environment Variables.');
      process.exit(1);
    }

    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
