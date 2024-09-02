import CartModel from "../models/cartModel.js";
import ProductModel from "../models/productModel.js";
import Items from "../models/itemsModel.js";

class CartServices {
    constructor() {};

    // Método para encontrar todos los carritos
    async findAll() {
        return await CartModel.findAll();
    };

    // Método para crear un carrito
    async create(cart) {
        return await CartModel.create(cart);
    };

    // Método para actualizar un carrito por ID
    async update(id, cart) {
        return await CartModel.update(cart, {
            where: { id }
        });
    };

    // Método para eliminar un carrito por ID
    async delete(id) {
        return await CartModel.destroy({
            where: { id }
        });
    };

    // Método para encontrar un carrito por ID
    async findById(id) {
        return await CartModel.findByPk(id);
    };

    // Método para encontrar un producto específico en el carrito de un usuario
    async findProductInCart(userId, productId) {
        return await CartModel.findOne({
            where: { userId, productId }
        });
    };

    // Método para actualizar la cantidad de un producto en el carrito
    async updateQuantity(userId, productId, quantity) {
        return await CartModel.update({ quantity }, {
            where: { userId, productId }
        });
    };

    // Método para eliminar un producto específico del carrito de un usuario
    async deleteProduct(userId, productId) {
        return await CartModel.destroy({
            where: { userId, productId }
        });
    };

    // Método para encontrar el carrito de un usuario específico
    async findByUserId(userId) {
        return await CartModel.findOne({ 
            where: { userId },
            include: [{
                model: Items,
                as: 'items',
                include: ['product']
            }]
        });
    };

    // Método para agregar un producto al carrito
    async addItem(userId, productId, quantity) {
        const cart = await this.findByUserId(userId);
        if (!cart) {
            const newCart = await CartModel.create({ userId });
            return await Items.create({ cartId: newCart.id, productId, quantity });
        }
        return await Items.create({ cartId: cart.id, productId, quantity });
    };

    // Método para eliminar un ítem del carrito
    async removeItem(itemId) {
        return await Items.destroy({ where: { id: itemId } });
    };

    // Método para vaciar el carrito de un usuario
    async clearCart(userId) {
        const cart = await this.findByUserId(userId);
        if (cart) {
            return await Items.destroy({ where: { cartId: cart.id } });
        }
    };
}

export default new CartServices();
