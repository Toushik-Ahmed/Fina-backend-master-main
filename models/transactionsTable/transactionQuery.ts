import { Op } from 'sequelize';
import { Transactions } from '../../interfaces/transactions';
import Transactionstable from './transactions';

export const createTransaction = async (data: Transactions) => {
  try {
    const transaction = await Transactionstable.create(data);
    return transaction;
  } catch (error) {
    console.log('Error adding transaction:error');
    throw error;
  }
};

export const transQueryByDate = async (startDate: Date, endDate: Date) => {
  try {
    const startUTC = new Date(startDate);
    startUTC.setUTCHours(0, 0, 0, 0);

    const endUTC = new Date(endDate);
    endUTC.setUTCHours(23, 59, 59, 999);

    const transactionData = await Transactionstable.findAll({
      where: {
        timestamp: {
          [Op.between]: [startUTC, endUTC],
        },
      },
    });

    return transactionData;
  } catch (error) {
    console.log(error);
    throw new Error('Error querying transactions');
  }
};
export const transQueryBySpecificDate = async (specificDate: string) => {
  try {
    const date = new Date(specificDate);
    const startDate = new Date(date);
    const endDate = new Date(date);

    startDate.setUTCHours(0, 0, 0, 0);
    endDate.setUTCHours(23, 59, 59, 999);

    const transactionData = await Transactionstable.findAll({
      where: {
        timestamp: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    return transactionData;
  } catch (error) {
    console.log(error);
    throw new Error('Error querying transactions');
  }
};

export const getAllTransaction = async () => {
  try {
    const getalltransaction = await Transactionstable.findAll();
    return getalltransaction;
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};
