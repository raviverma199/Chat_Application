import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected successfully");
    
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default ConnectDb;
