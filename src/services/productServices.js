import Product from '../models/product.js';

class ProductServices {
    constructor() {};

    async findAll() {
        return await Product.findAll();
    };

    async create(product) {
        return await Product.create(product);
    };

    async update(id, product) {
        return await Product.update(product, {
            where: {
                id: id
            }
        });
    };

    async delete(id) {
        return await Product.destroy({
            where: {
                id: id
            }
        });
    };
    
    async findById(id) {
        return await Product.findByPk(id);
    };
};

export default new ProductServices();