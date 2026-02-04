import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

// DB connect
connectDB();

// ---------------- ROUTES ----------------

// BASE ROUTE
app.get("/", (req, res) => {
  res.send("Base Route");
});

// user routes 
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
