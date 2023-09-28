import express from "express";

import { getProfile, deleteUser } from "../controllers/userController.js";
import authenticate from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile", authenticate, getProfile);
router.delete("/profile", authenticate, deleteUser);

export default router;
