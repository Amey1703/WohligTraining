import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRoutes from './routes/api.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// api routes
app.use('/api/products', apiRoutes);

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDb connection successful");
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch(() => {
      console.log("MongoDb connection failed");
    });
};

app.get("/", (req, res) => {
  res.send("Hello World");
});



connectDB();
