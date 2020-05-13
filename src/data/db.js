import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection Established");
    console.log("Server Listening");
  } catch (error) {
    console.log("An Error occured during connection", error);
    process.exit(1);
  }
};

export { connectDb };
