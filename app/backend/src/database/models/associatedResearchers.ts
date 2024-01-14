import { DataTypes, Model } from 'sequelize';
import db from '.';

class AssociatedResearchers extends Model {
  public id!: number;
  public researchersPhoto!: string;
  public researchersName!: string;
  public email!: string;
  public phone!: string;
  public curriculum!: string;
  public researchersResume!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

AssociatedResearchers.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  researchers_photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  researchers_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curriculum: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  researchers_resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'associatedResearchers',
    timestamps: false,
  });

export default AssociatedResearchers;