import { Router } from 'express';
import UnderGradController from '../controllers/undergradController';

const underGradRouter = Router();

const underGradController = new UnderGradController();

underGradRouter.get('/', (req, res) => underGradController.getUnderGraduates(req, res));

export default underGradRouter;