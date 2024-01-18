import Associated from '../database/models/associatedResearchers';

export default class AssociatedService {
    public associatedModel = Associated;

    public async getAssociates() {
        const result = await this.associatedModel.findAll();
        return result;
    }
}