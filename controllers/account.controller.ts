import { Request, Response } from "express";
import { Accounts } from "../interfaces/accounts";
import { ExtendedRequest } from "../interfaces/extendedRequest";
import { AccountsTable } from "../models/accountsTable/accounts";
import { addAccount } from "../models/accountsTable/accountsQuery";

export const getAllUserAccounts = async (
  req: ExtendedRequest,
  res: Response
) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    const accounts = await AccountsTable.findAll();
    return res.send(accounts);
  } catch (error) {
    res.status(500).send({
      message: (error as Error).message,
    });
  }
};

export const createAccount = async (req: ExtendedRequest, res: Response) => {
  try {
    const account: Omit<Accounts, "userId"> = req.body;
    const accountResult = await addAccount({
      ...account,
      userId: req.user?.id || 1,
    });
    res.status(201).json(accountResult);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
