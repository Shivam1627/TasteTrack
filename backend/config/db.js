// import mongoose from "mongoose";

// export const connectDB = async()=>{
//     await mongoose.connect('mongodb connection string')
//     .then(()=>console.log("DB Connected"))
// }

import mongoose from "mongoose";
import dotenv from "dotenv";  // Import dotenv to access environment variables

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    // Get the MongoDB URI from the environment variables
    const dbURI = process.env.MONGODB_URI;

    // Connect to MongoDB
    await mongoose.connect(dbURI);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error in DB Connection:", error);
  }
};
