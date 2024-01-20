import { Request, Response } from 'express';
import JournalService from '../services/journalService';

export default class JournalController {
    constructor(private journalService = new JournalService()) { }

    async getJournals(_req: Request, res: Response) {
        try {
            const journals = await this.journalService.getJournals();
            return res.status(200).json(journals);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving journals' });
        }
    }
}