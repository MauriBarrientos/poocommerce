import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    timestamps: false,
    tableName: 'cart'
});

export default Cart;
