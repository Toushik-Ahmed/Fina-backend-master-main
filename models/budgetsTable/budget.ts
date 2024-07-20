import { DataTypes, Model, Optional } from 'sequelize';
import { Budget } from '../../interfaces/budgets';
import sequelize from '../index';

export interface BudgetsAttributes extends Optional<Budget, 'id' | 'userId'> {}
export interface BudgetsInstance
  extends Model<Budget, BudgetsAttributes>,
    Budget {
  createdAt?: Date;
  updatedAt?: Date;
}

const Budgetstable = sequelize.define<BudgetsInstance>('budgets', {
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
    type: DataTypes.FLOAT,
  },
});

export default Budgetstable;
