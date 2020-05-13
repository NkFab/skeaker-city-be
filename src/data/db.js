import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    process.exit(1);
  }
};

export { connectDb };
