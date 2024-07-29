import { Merchant } from '../../interfaces/merchant';
import { User } from '../../interfaces/user.interface';
import { MerchantTable } from './merchantsTable';

export const create = async (data: Merchant) => {
  try {
    const merchant = await MerchantTable.create(data);
    return merchant;
  } catch (error) {
    console.log(error);
  }
};

export const getAllMerchants = async (user: User) => {
  try {
    const getallmerchants = MerchantTable.findAll({
      where: {
        userId: user.id,
      },
    });
    return getallmerchants;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMerchantById = async (id: number, userId: number) => {
  try {
    await MerchantTable.destroy({
      where: {
        id: id,
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
