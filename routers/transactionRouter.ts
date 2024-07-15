import { Router } from 'express';
import {
  addTransaction,
  transactionQueryByDate,
  transactionQueryByRange,
} from '../controllers/transactionController';

const transactionRouter = Router();

transactionRouter.post('/add', addTransaction);
transactionRouter.post('/queryByRange', transactionQueryByRange);
transactionRouter.post('/queryByDate', transactionQueryByDate);

export default transactionRouter;
