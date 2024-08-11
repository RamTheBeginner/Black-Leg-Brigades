import { Router } from "express";
import {
  login,
  signup,
  updateProfile
} from "../controllers/AuthController.js";
const authRoutes = Router();
authRoutes.post("/signup", signup);
authRoutes.post("/login",login);
authRoutes.post("/update-profile", updateProfile);
export default authRoutes;
