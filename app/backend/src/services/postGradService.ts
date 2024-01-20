import PostGraduates from '../database/models/postgradStudents';

export default class PostGradService {
    public postGradModel = PostGraduates;

    public async getPostGraduates() {
        const result = await this.postGradModel.findAll();
        return result;
    }
}