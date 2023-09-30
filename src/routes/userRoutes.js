import express from "express";

import authenticate from "../middlewares/authMiddleware.js";

import { deleteUser, getUser, getUsers, getTotalCustomers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/total", getTotalCustomers);
router.get("/:id", getUser);
router.delete("/profile", authenticate, deleteUser);

export default router;
