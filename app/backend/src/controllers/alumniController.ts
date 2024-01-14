import { Request, Response } from 'express';
import UserService from '../services/alumniService';

export default class AlumniController {
    constructor(private alumniService = new UserService()) { }

    async getAlumnis(_req: Request, res: Response) {
        try {
            const alumnis = await this.alumniService.getAlumnis();
            return res.status(200).json(alumnis);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving alumnis' });
        }
    }
}