import { Request, Response } from 'express';
import { AccountLog } from '../interfaces/accountlogs';
import { AccountLogTable } from '../models/accountsLogTable/accountsLog';

export async function addAccountLog(req: Request, res: Response) {
  try {
    const data: AccountLog = req.body;
    const result = await AccountLogTable.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
