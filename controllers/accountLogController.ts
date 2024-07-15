import { Request, Response } from 'express';
import { AccountLog } from '../interfaces/accountlogs';
import {
  accountLog,
  getAccountLogByAccountId,
} from '../models/accountsLogTable/accountsLogQuery';

export async function addAccountLog(req: Request, res: Response) {
  try {
    const data: Omit<AccountLog, 'accountId'> = req.body;

    const result = await accountLog({
      ...data,
      accountId: req.body.accountId || 1,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export const getAccountlogbyId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const accountId = Number(id);
    const findById = await getAccountLogByAccountId(accountId);
    res.status(201).json(findById);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
