import express from "express";

import authenticate from "../middlewares/authMiddleware.js";

import { getProfile, deleteUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/profile", getProfile);
router.delete("/profile", authenticate, deleteUser);

export default router;
