import Faculty from '../database/models/faculty';

export default class FacultyService {
    public facultyModel = Faculty;

    public async getFaculties() {
        const result = await this.facultyModel.findAll();
        return result;
    }
}