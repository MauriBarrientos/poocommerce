import userServices from "../services/userServices.js";

class UserController {
    constructor() {};

    async findAll(_req, res) {
        try {
            const users = await userServices.findAll();
            res.status(200).json(users);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async create(req, res) {
        try {
            const user = req.body;
            const newUser = await userServices.create(user);
            res.status(201).json(newUser);
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const user = req.body;
            await userServices.update(id, user);
            res.status(200).json({ message: "User updated successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await userServices.delete(id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            return CatchError(error, res);
        };
    };

    async findById(req, res) {
        try {
            const id = req.params.id;
            const user = await userServices.findById(id);
            res.status(200).json(user);
        } catch (error) {
            return CatchError(error, res);
        };
    };

};

export default new UserController();