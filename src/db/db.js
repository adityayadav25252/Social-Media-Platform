// src/utils/connectDB.js or similar
import mongoose from "mongoose";
import config from "../config/config.js";

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

export default connectDB;
