import { DataTypes, Model, Optional } from 'sequelize';
import { Categories } from '../../interfaces/categories';
import sequelize from '..';
export interface CategoriesAttributes extends Optional<Categories, 'id'> {}
export interface CategoriesInstance
  extends Model<Categories, CategoriesAttributes>,
    Categories {
  createdAt?: Date;
  updatedAt?: Date;
}

const CategoriesTable=sequelize.define<CategoriesInstance>('categories',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    unique: true,
  },
  expenses:{
    allowNull:false,
    type:DataTypes.NUMBER
  },
  transactionsId:{
    allowNull:false,
    type:DataTypes.STRING
  }
})

export default CategoriesTable