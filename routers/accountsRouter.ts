import { Router } from 'express';
import { createAccount } from '../controllers/account.controller';
import { deleteAccount } from '../models/accountsTable/accountsQuery';

export const accountsRouter = Router();

accountsRouter.post('/create', createAccount);
accountsRouter.delete('/delete', deleteAccount);
