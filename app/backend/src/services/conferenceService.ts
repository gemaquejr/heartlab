import Conference from '../database/models/conferences';

export default class ConferenceService {
    public conferenceModel = Conference;

    public async getConferences() {
        const result = await this.conferenceModel.findAll();
        return result;
    }
}