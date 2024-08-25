import { Router } from "express";
import {
Add_account,
Add_transaction,
Delete_Account,
edit_account
} from "../controllers/AccountsController.js";

const accountRoutes = Router();

accountRoutes.post('/add_account',Add_account)
accountRoutes.post('/add_transation',Add_transaction)
accountRoutes.post('/edit_account',edit_account)
accountRoutes.post('/delete_account',Delete_Account)
export default accountRoutes;