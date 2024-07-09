import { Router } from 'express';
import { getAlluser } from '../controllers/allUserget';
import { createUser } from '../controllers/usercreate';

const router = Router();

router.post('/login', createUser);
router.get('/login', getAlluser);
export default router;
