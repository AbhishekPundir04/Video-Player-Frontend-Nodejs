import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`mongodb connected ${connectionInstance}`);
  } catch (error) {
    console.log("Mongo connection error: " + error);
    process.exit(1);
  }
};
