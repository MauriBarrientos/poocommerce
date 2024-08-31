<<<<<<< HEAD
import cartControllers from "../controllers/cartControllers.js";
import { Router } from "express"; 

const cartRoutes = Router();
const {
    findAll,
    create,
    update,
    deleteCart,
    findById
} = cartControllers;

cartRoutes.get("/", findAll);
cartRoutes.post("/", create);
cartRoutes.put("/:id", update);
cartRoutes.delete("/:id", deleteCart);
cartRoutes.get("/:id", findById);
=======
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
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41

export default cartRoutes;
