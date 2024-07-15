export interface Accounts {
  id: number;
  userId?: number;
  accountname: string;
  bankname: string;
  accounttype: 'Credit' | 'Debit';
  finacardno?: string;
  manuallyaddedmoney?: number;
  totalmoney: number;
}
