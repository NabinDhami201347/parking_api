import express from "express";

import authorize from "../middlewares/authorizeMiddleware.js";
import authenticate from "../middlewares/authMiddleware.js";

import {
  createParkingSpot,
  deleteParkingSpot,
  getParkingSpot,
  getParkingSpots,
  updateParkingSpot,
} from "../controllers/parkingSpotController.js";

const router = express.Router();

router.post("/", authenticate, authorize, createParkingSpot);

router.get("/", getParkingSpots);
router.get("/:id", getParkingSpot);

router.put("/:id", authenticate, authorize, updateParkingSpot);
router.delete("/:id", authenticate, authorize, deleteParkingSpot);

export default router;
