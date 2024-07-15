import { DataTypes, Model, Optional } from 'sequelize';
import { Accounts } from '../../interfaces/accounts';
import { AccountLogTable } from '../accountsLogTable/accountsLog';
import sequelize from '../index';

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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accountname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  bankname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  accounttype: {
    allowNull: false,
    type: DataTypes.ENUM('Credit', 'Debit'),
  },
  finacardno: {
    allowNull: false,

    type: DataTypes.FLOAT,
  },

  manuallyaddedmoney: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },

  totalmoney: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
});

AccountsTable.hasMany(AccountLogTable, {
  sourceKey: 'id',
  foreignKey: 'accountId',
});
