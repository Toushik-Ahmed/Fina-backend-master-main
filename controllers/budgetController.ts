import { Request, Response } from 'express';
import { Budgets } from '../interfaces/budgets';
import {
  addBudget,
  deleteUserBudget,
  getAllBudget,
  updateUserBudget,
} from '../models/budgetsTable/budgetQuery';

export const addbudget = async (req: Request, res: Response) => {
  try {
    const data: Budgets = req.body;
    const budget = await addBudget(data);
    res.status(201).json(budget);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getallbudget = async (req: Request, res: Response) => {
  try {
    const getAll = await getAllBudget();
    res.status(201).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const deletebudget = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = Number(id);

    const deletedBudget = await deleteUserBudget(userId);
    res.status(201).json(deletedBudget);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updatebudget = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = Number(id);
    const updateBudget = await updateUserBudget(req.body, userId);
    res.status(201).json(updateBudget);
  } catch (error) {
    throw new Error('error');
  }
};
