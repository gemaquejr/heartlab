import { DataTypes, Model } from 'sequelize';
import db from '.';

class Awards extends Model {
  public id!: number;
  public age!: string;
  public award!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Awards.init({
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
  award: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    underscored: true,
    sequelize: db,
    modelName: 'awards',
    timestamps: false,
  });

export default Awards;