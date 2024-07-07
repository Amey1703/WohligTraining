import express from "express";
import dotenv from "dotenv";
import { generateAccessToken, createOrder, captureOrder } from "./services/paypal.js";

dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const tokenData = await generateAccessToken();
  res.render("index", { tokenData });
});

app.post("/pay", async (req, res) => {
  try {
    const url = await createOrder()
    res.redirect(url);
  } catch (error) {
    res.send("Error: " + error.message);
  }
});

app.get("/complete-order", async (req, res) => {
  try {
    await captureOrder(req.query.token)

    res.send("Order captured successfully!");
  } catch (error) {
      res.send("Error: " + error);
  }
});

app.get("/cancel-order", (req, res) => {
  res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
