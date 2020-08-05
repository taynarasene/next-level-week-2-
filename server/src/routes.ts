import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConectionsController from './controllers/ConectionsController';


const routes = express.Router();
const ClassesControllers = new ClassesController();
const connectionsContrololers = new ConectionsController();

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);
routes.get('/connections', connectionsContrololers.index);
routes.post('/connections', connectionsContrololers.create);

export default routes;