import { Request, Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { Transactions } from '../interfaces/transactions';
import {
  createTransaction,
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

export const transactionQueryByRange = async (req: Request, res: Response) => {
  try {
    const { timestamp1, timestamp2 } = req.body;
    const allTransaction = await transQueryByDate(timestamp1, timestamp2);
    res.status(201).json(allTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const transactionQueryByDate = async (req: Request, res: Response) => {
  try {
    const { date } = req.body;
    const transactions = await transQueryBySpecificDate(date);
    res.status(201).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
