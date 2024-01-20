import UnderGraduates from '../database/models/undergradStudents';

export default class UnderGradService {
    public underGradModel = UnderGraduates;

    public async getUnderGraduates() {
        const result = await this.underGradModel.findAll();
        return result;
    }
}