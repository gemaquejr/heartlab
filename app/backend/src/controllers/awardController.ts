import { Request, Response } from 'express';
import AwardService from '../services/awardService';

export default class AwardController {
    constructor(private awardService = new AwardService()) { }

    async getAwards(_req: Request, res: Response) {
        try {
            const awards = await this.awardService.getAwards();
            return res.status(200).json(awards);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving awards' });
        }
    }
}