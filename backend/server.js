import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// import Product from "./models/product.model.js";
// import mongoose from "mongoose";
import router from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", router);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
