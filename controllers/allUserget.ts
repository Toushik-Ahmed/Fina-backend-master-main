import { Request, Response } from 'express';
import { findAlluser } from '../models/users table/getAlluser';

export async function getAlluser(req: Request, res: Response) {
  try {
    const allUsers = await findAlluser();
    res.send(allUsers);
  } catch (error) {
    console.log('error occured');
  }
}
