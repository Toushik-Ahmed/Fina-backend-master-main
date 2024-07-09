import { Request, Response } from 'express';
import create from '../models/users table/userquery';

export async function createUser(req: Request, res: Response) {
  try {
    const user = req.body;
    await create(user);
    res.send('user created');
  } catch (error) {
    console.log('error occured');
  }
}
