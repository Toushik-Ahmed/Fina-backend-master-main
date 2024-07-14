import { Router } from "express";
import {
  addAccountLog,
  getAccountlogbyId,
} from "../controllers/accountLogController";

const accountLogRouter = Router();

accountLogRouter.get("/:id", getAccountlogbyId);
accountLogRouter.post("/add", addAccountLog);

export default accountLogRouter;
