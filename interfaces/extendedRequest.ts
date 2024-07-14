import { Request } from 'express';
import { User } from './user.interface';

export interface ExtendedRequest extends Request {
  user?: User;
}
