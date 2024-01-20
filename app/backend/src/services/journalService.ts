import Journal from '../database/models/journals';

export default class AwardService {
    public journalModel = Journal;

    public async getJournals() {
        const result = await this.journalModel.findAll();
        return result;
    }
}