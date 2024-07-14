import { Response, Router } from 'express';
import { getAllUserAccounts } from '../controllers/account.controller';
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

export default router;
