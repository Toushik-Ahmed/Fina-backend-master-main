import { AccountLog } from "../../interfaces/accountlogs";
import { AccountLogTable } from "./accountsLog";
import { AccountsTable } from "../accountsTable/accounts";

export async function accountLog(data: AccountLog) {
  try {
    const accountLog = await AccountLogTable.create(data);
    return accountLog;
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
}

export async function getAccountLogByAccountId(data: number) {
  try {
    const accountLog = await AccountLogTable.findAll({
      where: {
        accountId: data,
      },
    });
    return accountLog;
  } catch (error) {
    throw new Error("error");
  }
}

