import { Request, Response } from 'express';
import { AccountLog } from '../interfaces/accountlogs';
import {
  accountLog,
  getAccountLogById,
} from '../models/accountsLogTable/accountsLogQuery';

export async function addAccountLog(req: Request, res: Response) {
  try {
    const data: AccountLog = req.body;
    const result = await accountLog(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export const getAccountlogbyId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = Number(id);
    const findById = await getAccountLogById(userId);
    res.status(201).json(findById);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

