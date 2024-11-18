import mongoose from "mongoose";
import "dotenv/config";

if (!process.env.MONGO_URI) {
  throw new Error("please include mongodb  uri in .env");
}

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
