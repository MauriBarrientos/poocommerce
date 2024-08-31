<<<<<<< HEAD
import cartServices from "../services/cartServices.js";

class CartController {
    constructor() {};

    async findAll(_req, res) {
        try {
            const carts = await cartServices.findAll();
            res.status(200).json(carts);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async create(req, res) {
        try {
            const cart = req.body;
            const newCart = await cartServices.create(cart);
            res.status(201).json(newCart);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const cart = req.body;
            await cartServices.update(id, cart);
            res.status(200).json({ message: "Cart updated successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async deleteCart(req, res) {
        try {
            const id = req.params.id;
            await cartServices.delete(id);
            res.status(200).json({ message: "Cart deleted successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async findById(req, res) {
        try {
            const id = req.params.id;
            const cart = await cartServices.findById(id);
=======
import cartServices from '../services/CartServices.js';
import {CatchError} from '../utils/CatchError.js';

class CartController {
    async getCart(req, res) {
        try {
            const userId = req.userId;
            const cart = await cartServices.findByUserId(userId);
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
            res.status(200).json(cart);
        } catch (error) {
            return CatchError(error, res);
        };
    };

<<<<<<< HEAD
};

export default new CartController();
=======
    async addItem(req, res) {
        try {
            const userId = req.userId;
            const { productId, quantity } = req.body;
            const newItem = await cartServices.addItem(userId, productId, quantity);
            res.status(201).json(newItem);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async removeItem(req, res) {
        try {
            const { itemId } = req.params;
            await CartServices.removeItem(itemId);
            res.status(200).json({ message: "Item removed from cart" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async clearCart(req, res) {
        try {
            const userId = req.userId;
            await cartServices.clearCart(userId);
            res.status(200).json({ message: "Cart cleared" });
        } catch (error) {
            return CatchError(error, res);
        };
    };
}

export default new CartController();
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
