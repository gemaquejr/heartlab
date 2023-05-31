import { DataTypes, Model } from 'sequelize';
import db from '.';

class UndergradStudents extends Model {
  public id!: number;
  public undergradPhoto!: string;
  public undergradName!: string;
  public undergradResume!: string;

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
    undergrad_photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    undergrad_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    undergrad_resume: {
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