import { Router } from 'express';
import PostGradController from '../controllers/postgradController';

const postGradRouter = Router();

const postGradController = new PostGradController();

postGradRouter.get('/', (req, res) => postGradController.getPostGraduates(req, res));

export default postGradRouter;