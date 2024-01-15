import Alumni from '../database/models/alumni';

export default class AlumniService {
    public alumniModel = Alumni;

    public async getAlumnis() {
        const result = await this.alumniModel.findAll();
        return result;
    }
}