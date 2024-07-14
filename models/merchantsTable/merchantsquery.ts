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

export const getAllMerchants = async () => {
  try {
    const getallmerchants = MerchantTable.findAll();
    return getallmerchants;
  } catch (error) {
    throw new Error('error');
  }
};

export const deleteMerchantById = async (id: number) => {
  try {
    await MerchantTable.destroy({
      where: {
        userId: id,
      },
    });
  } catch (error) {
    throw new Error('error');
  }
};
