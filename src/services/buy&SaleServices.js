import CartModel from "../models/cartModel.js";

class BuyService {
    async createBuy(userId) {
        const cartItems = await CartModel.findAll({ where: { userId } });
        if (!cartItems.length) throw new Error("El carrito está vacio");

        let totalAmount = 0;
        for (const item of cartItems) {
            totalAmount += item.quantity * (await Product.findByPk(item.productId)).price;
        }

        const buy = await buy.create({ userId, totalAmount });

        //Registrar ventas
        for (const item of cartItems) {
            await buy.create({
                productId: item.productId,
                sellerId: (await Product.findByPk(item.productId)).sellerId,
                quantitySold: item.quantity
            });

            //Eliminar producto del carrito
            await item.destroy();
        }

        return buy;
    }
}

export default BuyService;
