import { Response, Router } from 'express';
import { getAllUserAccounts } from '../controllers/account.controller';
import { createUser, login } from '../controllers/usercreate';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { authMiddleware } from '../middlewares/auth';
import accountLogRouter from './accountsLogRouter';
import { accountsRouter } from './accountsRouter';
import budgetRouter from './budgetRouter';
import merchantRouter from './merchantRouter';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);

router.get(
  '/getLoggedInUser',
  authMiddleware,
  (req: ExtendedRequest, res: Response) => res.send(req.user)
);
router.get('/user/accounts', authMiddleware, getAllUserAccounts);

router.use('/accounts', authMiddleware, accountsRouter);
router.use('/accountLog', authMiddleware, accountLogRouter);
router.use('/budget', authMiddleware, budgetRouter);
router.use('/merchants', authMiddleware, merchantRouter);
export default router;
