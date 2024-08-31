<<<<<<< HEAD
import CartModel from "../models/cartModel.js";
import ProductModel from "../models/productModel.js";

class CartServices {
    constructor() {};

    async findAll() {
        return await CartModel.findAll();
    };

    async create(cart) {
        return await CartModel.create(cart);
    };

    async update(id, cart) {
        return await CartModel.update(cart, {
            where: {
                id: id
            }
        });
    };

    async delete(id) {
        return await CartModel.destroy({
            where: {
                id: id
            }
        });
    };
    
    async findById(id) {
        return await CartModel.findByPk(id);
    };

    async findProductInCart(userId, productId) {
        return await CartModel.findOne({
            where: {
                userId: userId,
                productId: productId
            }
        });
    };

    async updateQuantity(userId, productId, quantity) {
        return await CartModel.update({
            quantity: quantity
        }, {
            where: {
                userId: userId,
                productId: productId
            }
        });
    };

    async deleteProduct(userId, productId) {
        return await CartModel.destroy({
            where: {
                userId: userId,
                productId: productId
            }
        });
=======
import Cart from "../models/cartModel.js";
import Items from "../models/itemsModel.js";

class CartServices {
    async findByUserId(userId) {
        return await Cart.findOne({ 
            where: { userId },
            include: [{
                model: Items,
                as: 'items',
                include: ['product']
            }]
        });
    };

    async addItem(userId, productId, quantity) {
        const cart = await this.findByUserId(userId);
        if (!cart) {
            const newCart = await Cart.create({ userId });
            return await Items.create({ cartId: newCart.id, productId, quantity });
        };
        return await Items.create({ cartId: cart.id, productId, quantity });
    };

    async removeItem(itemId) {
        return await Items.destroy({ where: { id: itemId } });
    };

    async clearCart(userId) {
        const cart = await this.findByUserId(userId);
        if (cart) {
            return await Items.destroy({ where: { cartId: cart.id } });
        };
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
    };
}

export default new CartServices();