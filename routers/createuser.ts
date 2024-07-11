import { Router } from 'express';
import { createUser, login } from '../controllers/usercreate';

const router = Router();

router.post('/signup', createUser);

router.post('/login', login);

export default router;