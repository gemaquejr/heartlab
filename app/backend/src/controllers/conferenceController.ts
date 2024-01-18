import { Request, Response } from 'express';
import ConferenceService from '../services/conferenceService';

export default class ConferenceController {
    constructor(private conferenceService = new ConferenceService()) { }

    async getConferences(_req: Request, res: Response) {
        try {
            const conferences = await this.conferenceService.getConferences();
            return res.status(200).json(conferences);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error retrieving conferences' });
        }
    }
}