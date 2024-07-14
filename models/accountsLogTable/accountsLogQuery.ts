import { AccountLog } from '../../interfaces/accountlogs';
import { AccountLogTable } from './accountsLog';

export async function accountLog(data: AccountLog) {
  try {
    const accountLog = await AccountLogTable.create(data);
    return accountLog;
  } catch (error) {
    throw new Error('error');
  }
}

export async function getAccountLogById(data:number) {
  try {
    const accountLog = await AccountLogTable.findOne({
      where: {
        accountId: data,
      },
    });
    return accountLog;
  } catch (error) {
    throw new Error('error');
  }
}
