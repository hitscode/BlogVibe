import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb ");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb ", err);
  });

app.listen(5173, () => {
  console.log("Server is running on port 5173");
});
