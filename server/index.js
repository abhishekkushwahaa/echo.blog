import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoute.js";
import authRoutes from "./routes/authRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", testRoutes);
app.use("/api/auth", authRoutes);
