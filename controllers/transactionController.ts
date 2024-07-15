import { Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { Transactions } from '../interfaces/transactions';
import { createTransaction } from '../models/transactionsTable/transactionQuery';

export const addTransaction = async (req: ExtendedRequest, res: Response) => {
  try {
    const data: Omit<Transactions, 'userId' |'timestamp'> = req.body;
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
