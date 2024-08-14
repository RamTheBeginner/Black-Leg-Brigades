import { Router } from "express";
import {
Add_account
} from "../controllers/AccountsController.js";

const accountRoutes = Router();

accountRoutes.post('/add_account',Add_account)

export default accountRoutes;