import cartServices from "../services/cartServices";

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
            res.status(200).json(cart);
        } catch (error) {
            return CatchError(error, res);
        };
    };

};

export default new CartController();