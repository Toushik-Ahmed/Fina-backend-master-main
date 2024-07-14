import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '..';
import { Merchant } from '../../interfaces/merchant';
import Transactionstable from '../transactionsTable/transactions';
export interface MerchantAttributes extends Optional<Merchant, 'id'> {}
export interface MerchantInstance
  extends Model<Merchant, MerchantAttributes>,
    Merchant {
  createdAt?: Date;
  updatedAt?: Date;
}

export const MerchantTable = sequelize.define<MerchantInstance>('merchants', {
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
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});

MerchantTable.hasMany(Transactionstable, {
  foreignKey: 'merchantID',
});
