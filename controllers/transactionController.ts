import { Request, Response } from 'express';
import { Transactions } from '../interfaces/transactions';
import { createTransaction } from '../models/transactionsTable/transactionQuery';

export const addTransaction = async (req: Request, res: Response) => {
  try {
    const data: Transactions = req.body;
    const resultAddTransaction = await createTransaction(data);
    res.status(201).json(resultAddTransaction);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
