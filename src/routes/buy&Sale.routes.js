import BuyController from "../controllers/buy&SaleControllers.js";
import { Router } from "express";

const buySaleRoutes = Router();
const {
    createBuy
} = BuyController;

buySaleRoutes.post("/", createBuy);

export default buySaleRoutes;