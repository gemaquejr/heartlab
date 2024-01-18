import { Router } from 'express';
import ConferenceController from '../controllers/conferenceController';

const conferenceRouter = Router();

const conferenceController = new ConferenceController();

conferenceRouter.get('/', (req, res) => conferenceController.getConferences(req, res));

export default conferenceRouter;