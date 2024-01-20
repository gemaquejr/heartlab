import { Router } from 'express';
import JournalController from '../controllers/journalController';

const journalRouter = Router();

const journalController = new JournalController();

journalRouter.get('/', (req, res) => journalController.getJournals(req, res));

export default journalRouter;