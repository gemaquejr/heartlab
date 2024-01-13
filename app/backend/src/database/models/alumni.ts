import { DataTypes, Model } from 'sequelize';
import db from '.';

class Alumni extends Model {
  public id!: number;
  public alumniPhoto!: string;
  public alumniName!: string;
  public alumniResume!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Alumni.init({
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    alumni_resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
    sequelize: db,
    modelName: 'alumnis',
    timestamps: false,
  });

export default Alumni;