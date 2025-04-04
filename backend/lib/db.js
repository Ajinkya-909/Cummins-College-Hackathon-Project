import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`DataBase Connected Successfully`);
  } catch (error) {
    console.log(`Error in DataBase Connection : ${error}`);
  }
};