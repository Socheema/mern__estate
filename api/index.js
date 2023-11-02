import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/User.route.js'
import authRouter from "./routes/auth.route.js"
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

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
