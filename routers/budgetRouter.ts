import { Router } from 'express';
import {
  addbudget,
  deletebudget,
  getallbudget,
  updatebudget,
} from '../controllers/budgetController';

const budgetRouter = Router();

budgetRouter.post('/addBudget', addbudget);
budgetRouter.get('/getBudget', getallbudget);
budgetRouter.delete('/deleteBudget/:id', deletebudget);
budgetRouter.put('/updateBudget/:id', updatebudget);

export default budgetRouter;
