import { Merchant } from '../../interfaces/merchant';
import { MerchantTable } from './merchantsTable';

export const create = async (data: Merchant) => {
  try {
    const merchant = await MerchantTable.create(data);
    return merchant;
  } catch (error) {
    throw new Error('error');
  }
};
