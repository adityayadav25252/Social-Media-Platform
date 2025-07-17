import mongoose from "mongoose";
import dotenv from "dotenv";
import { config } from "../config/config.js";


const connectDB = () => {
  mongoose
    .connect(config.MONGODB_URL)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("error", err);
    });
};

export default connectDB