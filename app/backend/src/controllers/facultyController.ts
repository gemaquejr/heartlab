import { Request, Response } from 'express';
import FacultyService from '../services/facultyService';

export default class FacultyController {
    constructor(private facultyService = new FacultyService()) { }

    async getFaculties(_req: Request, res: Response) {
        try {
            const faculties = await this.facultyService.getFaculties();
            return res.status(200).json(faculties);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving faculties' });
        }
    }
}