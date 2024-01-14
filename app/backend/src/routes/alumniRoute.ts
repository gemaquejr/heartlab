import { Router } from 'express';
import AlumniController from '../controllers/alumniController';

const alumniRouter = Router();

const alumniController = new AlumniController();

alumniRouter.get('/', (req, res) => alumniController.getAlumnis(req, res));

export default alumniRouter;