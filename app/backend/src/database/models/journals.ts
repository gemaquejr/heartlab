import { DataTypes, Model } from 'sequelize';
import db from '.';

class Journals extends Model {
  public id!: number;
  public age!: string;
  public conference!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Journals.init({
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
  journal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'journals',
    timestamps: false,
  });

export default Journals;