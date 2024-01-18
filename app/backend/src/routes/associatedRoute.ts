import { Router } from 'express';
import AssociatedController from '../controllers/associatedController';

const associatedRouter = Router();

const associatedController = new AssociatedController();

associatedRouter.get('/', (req, res) => associatedController.getAssociates(req, res));

export default associatedRouter;