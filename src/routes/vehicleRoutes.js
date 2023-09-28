import express from "express";

import authenticate from "../middlewares/authMiddleware.js";
import {
  createVehicle,
  getVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", authenticate, createVehicle);

router.get("/", getVehicles);
router.get("/:id", getVehicle);

router.put("/:id", updateVehicle);
router.delete("/:id", deleteVehicle);

export default router;
