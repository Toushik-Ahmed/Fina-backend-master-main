import { Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { Transactions } from '../interfaces/transactions';
import {
  createTransaction,
  getAllTransaction,
  transQueryByDate,
  transQueryBySpecificDate,
} from '../models/transactionsTable/transactionQuery';

export const addTransaction = async (req: ExtendedRequest, res: Response) => {
  try {
    const data: Omit<Transactions, 'userId' | 'timestamp'> = req.body;
    const resultAddTransaction = await createTransaction({
      ...data,
      userId: req.user?.id || 1,
      timestamp: new Date(),
    });
    res.status(201).json(resultAddTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const transactionQueryByRange = async (
  req: ExtendedRequest,
  res: Response
) => {
  try {
    const { startDate, endDate } = req.query;
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const transactions = await transQueryByDate(
      new Date(startDate as string),
      new Date(endDate as string),
      user
    );
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error querying transactions' });
  }
};

export const transactionQueryByDate = async (
  req: ExtendedRequest,
  res: Response
) => {
  try {
    const { date } = req.query;
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const transactions = await transQueryBySpecificDate(date as string, user);
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error querying transactions' });
  }
};

export const transactionGetAll = async (
  req: ExtendedRequest,
  res: Response
) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: 'unauthorized',
      });
    }
    const getAll = await getAllTransaction(user);
    res.status(201).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
