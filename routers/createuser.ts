import { Router } from 'express';
import { getAlluser } from '../controllers/allUserget';
import { createUser } from '../controllers/usercreate';

const router = Router();

router.post('/signup', createUser);

router.get('/login', getAlluser);
export default router;
