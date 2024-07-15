import { Accounts } from '../../interfaces/accounts';
import { AccountsTable } from './accounts';

export const addAccount = async (data: Accounts) => {
  try {
    const account = await AccountsTable.create(data);
    return account;
  } catch (error) {
    throw new Error('error');
  }
};

export const deleteAccount = async (id: number) => {
  try {
    await AccountsTable.destroy({
      where: {
        userId: id,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('error');
  }
};
