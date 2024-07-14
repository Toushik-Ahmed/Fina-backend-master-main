import { DataTypes, Model, Optional } from 'sequelize';
import { Transactions } from '../../interfaces/transactions';
import sequelize from '../index';
export interface TransactionsAttributes extends Optional<Transactions, 'id'> {}
export interface TransactionsInstance
  extends Model<Transactions, TransactionsAttributes>,
    Transactions {
  createdAt?: Date;
  updatedAt?: Date;
}

const Transactionstable = sequelize.define<TransactionsInstance>(
  'transactions',
  {
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

    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  }
);

export default Transactionstable;
