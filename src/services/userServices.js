import UserModel from "../models/userModel.js";

class UserServices {
    constructor() {};

    async findAll() {
        return await UserModel.findAll();
    };

    async create(user) {
        return await UserModel.create(user);
    };

    async update(id, user) {
        return await UserModel.update(user, {
            where: {
                id: id
            }
        });
    };

    async delete(id) {
        return await UserModel.destroy({
            where: {
                id: id
            }
        });
    };
    
    async findById(id) {
        return await UserModel.findByPk(id);
    };
};

export default new UserServices();
