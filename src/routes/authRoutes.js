import express from "express";

import { registerUser, loginUser, refresh, logout, profile } from "../controllers/authController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/refresh", refresh);
router.get("/me", authenticate, profile);
router.post("/logout", logout);

export default router;
