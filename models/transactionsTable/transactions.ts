import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index';
import { Transactions } from '../../interfaces/transactions';
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

    categories: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    merchants: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
  }
);

export default Transactionstable;
