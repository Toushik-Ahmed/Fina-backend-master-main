import { Transactions } from '../../interfaces/transactions';
import Transactionstable from './transactions';

export const createTransaction = async (data: Transactions) => {
  try {
    const transaction = await Transactionstable.create(data);
    return transaction;
  } catch (error) {
    throw new Error('error');
  }
};
