import { DataTypes } from 'sequelize';
import { sequelize } from '../db/configDB.js';

const UserModel = sequelize.define('users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

export default UserModel