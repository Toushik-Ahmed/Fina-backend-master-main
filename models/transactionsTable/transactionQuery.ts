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

export const transQueryByDate = async (startDate: Date, endDate: Date) => {
  try {
    const transactionData = await Transactionstable.findAll({
      where: {
        timestamp: {
          $between: [startDate, endDate],
        },
      },
    });
    return transactionData;
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};
export const transQueryBySpecificDate = async (specificDate: Date) => {
  try {
    // Create startDate and endDate for the specific date
    const startDate = new Date(specificDate);
    const endDate = new Date(specificDate);

    // Set startDate to the beginning of the specific date
    startDate.setHours(0, 0, 0, 0);

    // Set endDate to the end of the specific date
    endDate.setHours(23, 59, 59, 999);

    const transactionData = await Transactionstable.findAll({
      where: {
        timestamp: {
          $between: [startDate, endDate],
        },
      },
    });
    return transactionData;
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};
