import { Response } from 'express';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import { Merchant } from '../interfaces/merchant';
import {
  create,
  deleteMerchantById,
  getAllMerchants,
} from '../models/merchantsTable/merchantsquery';

export const addmerchant = async (req: ExtendedRequest, res: Response) => {
  try {
    const data: Omit<Merchant, 'userId'> = req.body;
    const merchantResult = await create({
      ...data,
      userId: req.user?.id || 1,
    });
    res.status(201).json(merchantResult);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getallmerchants = async (req: ExtendedRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const result = await getAllMerchants(user);
    res.send(result);
  } catch (error) {
    console.error(error);
    console.log('error occured');
  }
};

export const deleteMerchant = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).send({
        message: 'unauthorized',
      });
    }
    const deletemerchant = await deleteMerchantById(id, userId);
    res.status(201).json(deletemerchant);
  } catch (error) {
    throw new Error('error');
  }
};
