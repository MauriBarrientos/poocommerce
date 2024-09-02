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

export default cartRoutes;
