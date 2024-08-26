import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';


const   Items = sequelize.define('Items', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
});

export default Items;

