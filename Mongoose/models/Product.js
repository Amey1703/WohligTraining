import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please enter product name"] },
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product",productSchema);

export default Product;