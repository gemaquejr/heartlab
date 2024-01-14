import User from '../database/models/alumni';

export default class AlumniService {
    public alumniModel = User;

    public async getAlumnis() {
        const result = await this.alumniModel.findAll();
        return result;
    }
}