import cartServices from '../services/CartServices.js';
import {CatchError} from '../utils/CatchError.js';

class CartController {
    async getCart(req, res) {
        try {
            const userId = req.userId;
            const cart = await cartServices.findByUserId(userId);
            res.status(200).json(cart);
        } catch (error) {
            return CatchError(error, res);
        };
    };

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
