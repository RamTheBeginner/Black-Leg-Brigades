import { Router } from "express";
import {
  login,
  signup,
  updateProfile,
  addProfileImage,

  removeProfileImage
} from "../controllers/AuthController.js";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import multer from "multer"
import config from "../config/firebase.js";
initializeApp(config.firebaseConfig);
const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });
const authRoutes = Router();
authRoutes.post(
  "/add-profile-image",
  upload.single("profile-image"),
  addProfileImage
);
authRoutes.post("/remove-profile-image",removeProfileImage)

authRoutes.post("/signup", signup);
authRoutes.post("/login",login);
authRoutes.post("/update-profile", updateProfile);
export default authRoutes;
