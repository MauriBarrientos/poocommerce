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
    };
}

export default new CartServices();