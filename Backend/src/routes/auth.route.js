import express from "express";
const router = express.Router();
import {
  get_current_user,
  login,
  logout_user,
  register,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout_user);
router.get("/me", authMiddleware, get_current_user);

export default router;
