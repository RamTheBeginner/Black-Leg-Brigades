import { Router } from "express";
import {
Add_account,
Add_transaction
} from "../controllers/AccountsController.js";

const accountRoutes = Router();

accountRoutes.post('/add_account',Add_account)
accountRoutes.post('/add_transation',Add_transaction)

export default accountRoutes;