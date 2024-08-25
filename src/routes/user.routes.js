import userController from '../controllers/userControllers.js';
import { Router } from 'express';

const userRoutes = Router();
const {
    findAll,
    create,
    update,
    deleteUser,
    findById
} = userController;

userRoutes.get('/', findAll);
userRoutes.post('/', create);
userRoutes.put('/:id', update);
userRoutes.delete('/:id', deleteUser);
userRoutes.get('/:id', findById);


export default userRoutes;