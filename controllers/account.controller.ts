import { Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { AccountsTable } from '../models/accountsTable/accounts';

export const getAllUserAccounts = async (
  req: ExtendedRequest,
  res: Response
) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const accounts = await AccountsTable.findAll({
      where: {
        userId: user.id,
      },
    });
    return res.send(accounts);
  } catch (error) {
    res.status(500).send({
      message:(error as Error).message
    })
  }
};
