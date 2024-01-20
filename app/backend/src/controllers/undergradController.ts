import { Request, Response } from 'express';
import UnderGradService from '../services/underGradService';

export default class PostGradController {
    constructor(private underGradService = new UnderGradService()) { }

    async getUnderGraduates(_req: Request, res: Response) {
        try {
            const underGraduates = await this.underGradService.getUnderGraduates();
            return res.status(200).json(underGraduates);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving UnderGraduates' });
        }
    }
}