import cartController from "../controllers/cartControllers.js";
import { Router } from "express";

const cartRoutes = Router();
const {
    getCart,
    addItem,
    removeItem,
    clearCart
} = cartController;

cartRoutes.get("/", getCart);
cartRoutes.post("/", addItem);
cartRoutes.delete("/:itemId", removeItem);
cartRoutes.delete("/", clearCart);

export default cartRoutes;
