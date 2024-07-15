import { Router } from 'express';
import {
  addbudget,
  deletebudget,
  getallbudget,
} from '../controllers/budgetController';

const budgetRouter = Router();

budgetRouter.post('/addBudget', addbudget);
budgetRouter.get('/getBudget', getallbudget);
budgetRouter.delete('./deleteBudget', deletebudget);

export default budgetRouter;
