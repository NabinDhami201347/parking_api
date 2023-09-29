import express from "express";

import authenticate from "../middlewares/authMiddleware.js";
import {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

router.post("/", authenticate, createReservation);
router.get("/", getReservations);
router.get("/:id", getReservation);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);

export default router;
