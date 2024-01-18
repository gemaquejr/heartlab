import { Request, Response } from 'express';
import AssociatedService from '../services/associatedService';

export default class AssociatedController {
    constructor(private associatedService = new AssociatedService()) { }

    async getAssociates(_req: Request, res: Response) {
        try {
            const associates = await this.associatedService.getAssociates();
            return res.status(200).json(associates);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving associates' });
        }
    }
}