import { Budget } from '../../interfaces/budgets';
import Budgetstable from './budget';

export const addBudget = async (data: Budget) => {
  try {
    const addedBudget = Budgetstable.create(data);
    return addedBudget;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBudget = async () => {
  try {
    const getUsersBudget = Budgetstable.findAll();
    return getUsersBudget;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};

export const deleteUserBudget = async (id: number) => {
  try {
    await Budgetstable.destroy({
      where: {
        $id$: id,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};

export const updateUserBudget = async (up: any, id: number) => {
  try {
    const editedBudget = await Budgetstable.update(up, {
      where: {
        $id$: id,
      },
    });
    return editedBudget;
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};
