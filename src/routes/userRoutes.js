import express from "express";

import authenticate from "../middlewares/authMiddleware.js";

import { deleteUser, getUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getUsers);
router.delete("/profile", authenticate, deleteUser);

export default router;
