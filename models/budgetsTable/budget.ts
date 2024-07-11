import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index';
import { Budgets } from '../../interfaces/budgets';

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
