import { Router } from "express";
import { createAccount } from "../controllers/account.controller";

export const accountsRouter = Router();

accountsRouter.post('/create', createAccount)