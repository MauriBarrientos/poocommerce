import productConntroller from "../controllers/productConntroller.js";
import { Router } from "express";

const productRoutes = Router();
const {
    findAll,
    create,
    update,
    delete: deleteProduct,
    findById
} = productConntroller;

productRoutes.get("/", findAll);

productRoutes.post("/", create);

productRoutes.put("/:id", update);

productRoutes.delete("/:id", deleteProduct);

productRoutes.get("/:id", findById);

export default productRoutes;