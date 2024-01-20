import { Router } from 'express';
import FacultyController from '../controllers/facultyController';

const facultyRouter = Router();

const facultyController = new FacultyController();

facultyRouter.get('/', (req, res) => facultyController.getFaculties(req, res));

export default facultyRouter;