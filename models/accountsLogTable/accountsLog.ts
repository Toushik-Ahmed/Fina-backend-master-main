import { DataTypes, Model, Optional } from 'sequelize';
import { AccountLog } from '../../interfaces/accountlogs';
import sequelize from '../index';
export interface AccountLogAttributes extends Optional<AccountLog, 'id'> {}
export interface AccounLogInstance
  extends Model<AccountLog, AccountLogAttributes>,
    AccountLog {
  createdAt?: Date;
  updatedAt?: Date;
}

export const AccountLogTable = sequelize.define<AccounLogInstance>(
  'accountlog',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    amount: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM('manual', 'card'), // Use ENUM to restrict values
    },

    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  }
);
