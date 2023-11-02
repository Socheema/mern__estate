import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/User.route.js'
dotenv.config();

mongoose
  .connect(process.env.MONGO__URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

app.use('/api/user', userRouter)
