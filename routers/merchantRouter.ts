import { Router } from 'express';
import {
  addmerchant,
  deleteMerchant,
  getallmerchants,
} from '../controllers/merchantController';

const merchantRouter = Router();

merchantRouter.post('/add', addmerchant);
merchantRouter.get('/getAll', getallmerchants);
merchantRouter.delete('./delete', deleteMerchant);

export default merchantRouter;