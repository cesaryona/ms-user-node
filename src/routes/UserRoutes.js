import { Router } from 'express';
import { getAll, getUserById, save, update, deleteById } from '../controllers/UserController.js';
const routes = new Router();

const userPath = '/users';

routes.get(userPath, getAll);
routes.get(`${userPath}/:id`, getUserById);
routes.post(userPath, save);
routes.put(`${userPath}/:id`, update);
routes.delete(`${userPath}/:id`, deleteById);

export default routes;
