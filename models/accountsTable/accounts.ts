import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index';
import { Accounts } from '../../interfaces/accounts';

export interface AccountsAttributes
  extends Optional<Accounts, 'finacardno' | 'id' | 'manuallyaddedmoney'> {}
export interface UserInstance
  extends Model<Accounts, AccountsAttributes>,
    Accounts {
  createdAt?: Date;
  updatedAt?: Date;
}
// <UserInstance>

export const AccountsTable = sequelize.define<UserInstance>('accounts', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  accountname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  bankname: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  finacardno: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.FLOAT,
  },

  manuallyaddedmoney: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },

  totalmoney: {
    allowNull: false,
    type: DataTypes.NUMBER,
  },
});
