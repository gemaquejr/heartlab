import { DataTypes, Model } from 'sequelize';
import db from '.';

class Conferences extends Model {
  public id!: number;
  public age!: string;
  public conference!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Conferences.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conference: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'conferences',
    timestamps: false,
  });

export default Conferences;