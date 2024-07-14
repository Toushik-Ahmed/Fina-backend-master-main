import { DataTypes, Model, Optional } from 'sequelize';
import { User } from '../../interfaces/user.interface';
import { AccountsTable } from '../accountsTable/accounts';
import Budgetstable from '../budgetsTable/budget';
import sequelize from '../index';
import { MerchantTable } from '../merchantsTable/merchantsTable';
import Transactionstable from '../transactionsTable/transactions';

export interface UserAttributes extends Optional<User, 'id'> {}
export interface UserInstance extends Model<User, UserAttributes>, User {
  createdAt?: Date;
  updatedAt?: Date;
}

const UserTable = sequelize.define<UserInstance>('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
UserTable.hasMany(AccountsTable, {
  sourceKey: 'id',
  foreignKey: 'userId',
});
UserTable.hasMany(MerchantTable, {
  sourceKey: 'id',
  foreignKey: 'userId',
});
UserTable.hasMany(Transactionstable, {
  sourceKey: 'id',
  foreignKey: 'userId',
});
UserTable.hasMany(Budgetstable, {
  sourceKey: 'id',
  foreignKey: 'userId',
});

export default UserTable;
