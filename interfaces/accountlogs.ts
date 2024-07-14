export interface AccountLog {
  id: number;
  amount: number;
  type: 'manual' | 'card';
  timestamp: Date;
}
