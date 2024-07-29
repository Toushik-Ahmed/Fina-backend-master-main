import { Response } from 'express';
import { Budget } from '../interfaces/budgets';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import {
  addBudget,
  deleteUserBudget,
  getAllBudget,
  updateUserBudget,
} from '../models/budgetsTable/budgetQuery';

export const addbudget = async (req: ExtendedRequest, res: Response) => {
  try {
    const data: Omit<Budget, 'userId'> = req.body;
    const budget = await addBudget({
      ...data,
      userId: req.user?.id || 1,
    });
    res.status(201).json(budget);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getallbudget = async (req: ExtendedRequest, res: Response) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const getAll = await getAllBudget(user);
    res.status(201).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deletebudget = async (req: ExtendedRequest, res: Response) => {
  try {
    const id =Number (req.params.id);
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const deletedBudget = await deleteUserBudget(id,userId);
    res.status(201).json(deletedBudget);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const updatebudget = async (req: ExtendedRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const userId =req.user?.id;
    if (!userId) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    const updateBudget = await updateUserBudget(req.body, id,userId);
    res.status(201).json(updateBudget);
  } catch (error) {
    throw new Error('error');
  }
};
