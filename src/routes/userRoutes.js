import express from "express";

import authorize from "../middlewares/authorizeMiddleware.js";
import authenticate from "../middlewares/authMiddleware.js";
import admin from "../middlewares/adminMiddleware.js";

import { getProfile, deleteUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", authenticate, admin, getProfile);
// router.get("/profile", authenticate, authorize, getProfile);
router.get("/:id", getUser);
router.delete("/profile", authenticate, deleteUser);

export default router;
