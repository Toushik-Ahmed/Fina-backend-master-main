import { Router } from 'express';
import { createUser, login } from '../controllers/usercreate';
import { getAlluser } from '../controllers/allUserget';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);
router.get('/get',authMiddleware, getAlluser)

export default router;
