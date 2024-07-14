import { Budgets } from '../../interfaces/budgets';
import Budgetstable from './budget';

export const addBudget = async (data: Budgets) => {
  try {
    const budget = await Budgetstable.create({ data });
    return budget;
  } catch (error) {
    throw new Error('error');
  }
};

export const getAllBudget = async () => {
  try {
    const getUsersBudget = Budgetstable.findAll();
    return getUsersBudget;
  } catch (error) {
    throw new Error('error');
  }
};

export const deleteUserBudget = async (id: number) => {
  try {
    await Budgetstable.destroy({
      where: {
        userId: id,
      },
    });
  } catch (error) {
    throw new Error('error');
  }
};

export const updateUserBudget = async (up: any, id: number) => {
  try {
    const editedBudget = await Budgetstable.update(up, {
      where: {
        userId: id,
      },
    });
    return editedBudget;
  } catch (error) {
    throw new Error('error');
  }
};
