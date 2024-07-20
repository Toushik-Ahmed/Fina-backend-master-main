import { Router } from 'express';
import {
  addTransaction,
  transactionGetAll,
  transactionQueryByDate,
  transactionQueryByRange,
} from '../controllers/transactionController';

const transactionRouter = Router();

transactionRouter.post('/add', addTransaction);
transactionRouter.post('/queryByRange', transactionQueryByRange);
transactionRouter.post('/queryByDate', transactionQueryByDate);
transactionRouter.get('/getAll',transactionGetAll)

export default transactionRouter;
