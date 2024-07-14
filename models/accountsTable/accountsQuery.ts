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
