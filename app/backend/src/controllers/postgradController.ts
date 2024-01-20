import { Request, Response } from 'express';
import PostGradService from '../services/postGradService';

export default class PostGradController {
    constructor(private postGradService = new PostGradService()) { }

    async getPostGraduates(_req: Request, res: Response) {
        try {
            const postGraduates = await this.postGradService.getPostGraduates();
            return res.status(200).json(postGraduates);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving PostGraduates' });
        }
    }
}