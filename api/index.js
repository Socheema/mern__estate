import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// bRdEUuHUMCWAKmFy
mongoose
  .connect(process.env.MONGO__URI)
  .then(() => {
    console.log("Connect to MondoDB!!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});
