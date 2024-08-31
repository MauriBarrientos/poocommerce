import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';

const Sale = sequelize.define('sale', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantitySold: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    saleDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

export default Sale;