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
    };
}

export default new CartServices();