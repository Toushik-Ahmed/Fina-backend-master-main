import { Router } from 'express';
import {
  addTransaction,
  transactionGetAll,
  transactionQueryByDate,
  transactionQueryByRange,
} from '../controllers/transactionController';

const transactionRouter = Router();

transactionRouter.post('/add', addTransaction);
transactionRouter.get('/queryByRange', transactionQueryByRange);
transactionRouter.get('/queryByDate', transactionQueryByDate);
transactionRouter.get('/getAll',transactionGetAll)

export default transactionRouter;
