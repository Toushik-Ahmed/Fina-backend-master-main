import { Router } from 'express';
import { getAlluser } from '../controllers/allUserget';
import { createUser, login } from '../controllers/usercreate';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);
router.get('/checkAuth')
export default router;
