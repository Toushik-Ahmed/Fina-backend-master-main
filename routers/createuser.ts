import { Response, Router } from 'express';
import { createUser, login } from '../controllers/usercreate';
import { getAlluser } from '../controllers/allUserget';
import { authMiddleware } from '../middlewares/auth';
import { ExtendedRequest } from '../interfaces/extendedRequest';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);

router.get('/getLoggedInUser', authMiddleware, (req:ExtendedRequest, res: Response) => res.send(req.user))

export default router;
