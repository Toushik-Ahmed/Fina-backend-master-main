export interface Transactions {
  id: number;
  userId?: number;
  merchantName: string;
  type: string;
  merchantId?: number;
  amount: number;
  category: string;
  timestamp?: Date;
}
