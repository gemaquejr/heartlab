import { DataTypes, Model } from 'sequelize';
import db from '.';

class UndergradStudents extends Model {
  public id!: number;
  public experience!: string;
  public undergradPhoto!: string;
  public undergradName!: string;
  public nationality!: string;
  public age!: string;
  public email!: string;
  public phone!: string;
  public curriculum!: string;
  public advisor!: string;
  public undergradResume!: string;
  public hobbies!: string;
  public education!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UndergradStudents.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alumni_photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alumni_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
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
  advisor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alumni_resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hobbies: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'undergradStudents',
    timestamps: false,
  });

export default UndergradStudents;