import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';

<<<<<<< HEAD
const CartModel = sequelize.define('cart', {
=======
const Cart = sequelize.define('cart', {
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
<<<<<<< HEAD
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

export default CartModel;
=======
    }
}, {
    timestamps: false,
    tableName: 'cart'
});

export default Cart;
>>>>>>> 4fd3f482d65bae980cb8129221f0070e5f1fac41
