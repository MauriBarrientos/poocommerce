import UserModel from './userModel.js';
import Product from './productModel.js';
import CartModel from './cartModel.js';
import Buy from './buyModel.js';
import Sale from './saleModel.js';

const setRelations = () => {
    //Usuario tiene muchos carritos
    UserModel.hasMany(CartModel, { foreignKey: 'userId' });
    CartModel.belongsTo(UserModel, { foreignKey: 'userId' });

    //Producto tiene muchos carritos
    Product.hasMany(CartModel, { foreignKey: 'productId' });
    CartModel.belongsTo(Product, { foreignKey: 'productId' });

    //Usuario tiene muchas compras
    UserModel.hasMany(Buy, { foreignKey: 'userId' });
    Buy.belongsTo(UserModel, { foreignKey: 'userId' });

    //Producto tiene muchas vntas 
    Product.hasMany(Sale, { foreignKey: 'productId' });
    Sale.belongsTo(Product, { foreignKey: 'productId' });

    //Usuario vendedor tiene muchas ventas
    UserModel.hasMany(Sale, { foreignKey: 'sellerId' });
    Sale.belongsTo(UserModel, { foreignKey: 'sellerId' });
};

export default setRelations;
