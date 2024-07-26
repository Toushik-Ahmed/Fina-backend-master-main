import { Request, Response } from 'express';
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

export const getallmerchants = async (req: Request, res: Response) => {
  try {
    const result = await getAllMerchants();
    res.send(result);
  } catch (error) {
    console.error(error)
    console.log('error occured');
  }
};

export const deleteMerchant = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = Number(id);
    const deletemerchant = await deleteMerchantById(userId);
    res.status(201).json(deletemerchant);
  } catch (error) {
    throw new Error('error');
  }
};
