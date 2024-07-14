import { Response, Router } from 'express';
import {
  createAccount,
  getAllUserAccounts,
} from '../controllers/account.controller';
import { addAccountLog } from '../controllers/accountLogController';
import { createUser, login } from '../controllers/usercreate';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);

router.get(
  '/getLoggedInUser',
  authMiddleware,
  (req: ExtendedRequest, res: Response) => res.send(req.user)
);
router.get('/user/accounts', authMiddleware, getAllUserAccounts);
router.post('/addaccountlog', addAccountLog),
  router.post('/addaccount', createAccount);

export default router;
