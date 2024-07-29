import { Budget } from '../../interfaces/budgets';
import { User } from '../../interfaces/user.interface';
import Budgetstable from './budget';

export const addBudget = async (data: Budget) => {
  try {
    const addedBudget = Budgetstable.create(data);
    return addedBudget;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBudget = async (user: User) => {
  try {
    const getUsersBudget = Budgetstable.findAll({
      where: {
        userId: user.id,
      },
    });
    return getUsersBudget;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};

export const deleteUserBudget = async (id: number, userId: number) => {
  try {
    await Budgetstable.destroy({
      where: {
        id: id,
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};

export const updateUserBudget = async (up: any, id: number, userId: number) => {
  try {
    const editedBudget = await Budgetstable.update(up, {
      where: {
        id: id,
        userId: userId,
      },
    });
    return editedBudget;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};
