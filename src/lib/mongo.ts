import mongoose from "mongoose";
import dotenv from 'dotenv'
export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL||"");
        console.log("db connected successfully")
    
  } catch (error) {
    console.log("Error in connecting DB", error);
  }
}
