import express from 'express';
import TaskController from '../controller/TaskController.js';

const routes = express.Router();

routes.get('/', TaskController.getAllTasks);
routes.post('/create', TaskController.createTask);
routes.get('/getById/:id/:method', TaskController.getById);
routes.post('/updateOne/:id', TaskController.updateOneTask);
routes.get('/deleteOne/:id', TaskController.deleteOneTask);

export default routes;

