export interface AccountLog {
  id: number;
  accountId:number;
  amount: number;
  type: 'manual' | 'card';
  timestamp: Date;
}
