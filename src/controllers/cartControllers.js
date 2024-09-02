import cartServices from '../services/cartServices.js';
import { CatchError } from '../utils/CatchError.js';

class CartController {
    constructor() {};

    // Método para obtener todos los carritos
    async findAll(_req, res) {
        try {
            const carts = await cartServices.findAll();
            res.status(200).json(carts);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    // Método para crear un carrito
    async create(req, res) {
        try {
            const cart = req.body;
            const newCart = await cartServices.create(cart);
            res.status(201).json(newCart);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    // Método para actualizar un carrito por ID
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

    // Método para eliminar un carrito por ID
    async deleteCart(req, res) {
        try {
            const id = req.params.id;
            await cartServices.delete(id);
            res.status(200).json({ message: "Cart deleted successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    // Método para obtener el carrito de un usuario específico
    async getCart(req, res) {
        try {
            const userId = req.userId;
            const cart = await cartServices.findByUserId(userId);
            res.status(200).json(cart);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    // Método para agregar un artículo al carrito
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

    // Método para eliminar un artículo del carrito
    async removeItem(req, res) {
        try {
            const { itemId } = req.params;
            await cartServices.removeItem(itemId);
            res.status(200).json({ message: "Item removed from cart" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    // Método para limpiar el carrito de un usuario
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
