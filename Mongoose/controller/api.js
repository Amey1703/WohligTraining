import Product from "../models/Product.js";

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, message: "Products Found", data: products });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
};

// Get single product by id
const getProductById = async (req, res) => {
    try {
      const userId = req.params.id;

      const product = await Product.findById(userId);
      if (!product) {
        return res
          .status(400)
          .json({ success: false, message: "Product not found" });
      }

      return res.status(200).json({
        success: true,
        message: `Product found`,
        data: product,
      });
    } catch (error) {
      res.status(404).json({ success: false, message: "Something went wrong" });
    }
  }

  // Add new product
  const AddProduct = async (req, res) => {
    try {
      // const { name, price, quantity, image } = req.body;

      const product = await Product.create(req.body);
      res.status(201).json({
        success: true,
        message: "Product added successfully",
        data: product,
      });
    } catch (error) {
      res.status(500).json({ sucess: false, message: error.message });
    }
  }

  // Update product by id
  const updateProduct = async (req, res) => {
    try {
      const userId = req.params.id;
      const product = await Product.findByIdAndUpdate(userId, req.body, {
        new: true,
      });

      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
      }
      const updatedProduct = await Product.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      res.status(200).json({
        success: true,
        message: "Product Updated",
        data: updatedProduct,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

//   Delete a product

const deleteProduct = async (req, res) => {
    try {
      const userId = req.params.id;
      const product = await Product.findById(userId);
      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
      }
      const deleteProduct = await Product.findByIdAndDelete(userId);
      res
        .status(200)
        .json({ success: true, message: "Product deleted", data: product });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  export  { getAllProducts, getProductById, AddProduct, updateProduct, deleteProduct };