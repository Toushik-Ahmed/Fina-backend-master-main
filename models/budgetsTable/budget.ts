import { DataTypes, Model, Optional } from 'sequelize';
import { Budgets } from '../../interfaces/budgets';
import sequelize from '../index';

export interface BudgetsAttributes extends Optional<Budgets, 'id'> {}
export interface BudgetsInstance
  extends Model<Budgets, BudgetsAttributes>,
    Budgets {
  createdAt?: Date;
  updatedAt?: Date;
}

const Budgetstable = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  budget: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

export default Budgetstable;
