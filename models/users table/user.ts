import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index';
import { User } from '../../interfaces/user.interface';

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

export default UserTable;
