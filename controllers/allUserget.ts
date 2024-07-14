import { Request, Response } from 'express';
import { findAlluser } from '../models/users table/getAlluser';
import { ExtendedRequest } from '../interfaces/extendedRequest';

export async function getAlluser(req: ExtendedRequest, res: Response) {
console.log(req.user)
  try {
    const allUsers = await findAlluser();
    res.send(allUsers);
  } catch (error) {
    console.log('error occured');
  }
}
