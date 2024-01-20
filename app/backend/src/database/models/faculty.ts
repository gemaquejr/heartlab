import { DataTypes, Model } from 'sequelize';
import db from '.';

class Faculty extends Model {
  public id!: number;
  public facultyPhoto!: string;
  public facultyName!: string;
  public email!: string;
  public phone!: string;
  public curriculum!: string;
  public facultyResume!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Faculty.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  faculty_photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faculty_name: {
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
  faculty_resume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'faculties',
    timestamps: false,
  });

export default Faculty;