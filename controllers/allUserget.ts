import { Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { findAlluser } from '../models/users table/getAlluser';

export async function getAlluser(req: ExtendedRequest, res: Response) {
  console.log(req.user);
  try {
    const allUsers = await findAlluser();
    res.send(allUsers);
  } catch (error) {
    console.log(error);
  }
}
