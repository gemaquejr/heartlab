import Award from '../database/models/awards';

export default class AwardService {
    public awardModel = Award;

    public async getAwards() {
        const result = await this.awardModel.findAll();
        return result;
    }
}