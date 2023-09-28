import express from "express";

import {
  createParkingSpot,
  deleteParkingSpot,
  getParkingSpot,
  getParkingSpots,
  updateParkingSpot,
} from "../controllers/parkingSpotController.js";

const router = express.Router();

router.post("/", createParkingSpot);

router.get("/", getParkingSpots);
router.get("/:id", getParkingSpot);

router.put("/:id", updateParkingSpot);
router.delete("/:id", deleteParkingSpot);

export default router;
