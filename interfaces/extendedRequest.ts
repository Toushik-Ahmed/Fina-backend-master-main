import { Request } from 'express';
import { UserInstance } from '../models/users table/user';

export interface ExtendedRequest extends Request {
  user?: UserInstance;
}
