import { Router } from 'express';
import AwardController from '../controllers/awardController';

const awardRouter = Router();

const awardController = new AwardController();

awardRouter.get('/', (req, res) => awardController.getAwards(req, res));

export default awardRouter;