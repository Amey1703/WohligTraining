import { Router } from "express";
import { getAllProducts,getProductById,AddProduct,updateProduct,deleteProduct } from "../controller/api.js";

const router = new Router();

router
  .get("/",getAllProducts)
  .get("/:id", getProductById)
  .post("", AddProduct)
  .put("/:id",updateProduct)
  .delete("/:id",deleteProduct);

export default router;
