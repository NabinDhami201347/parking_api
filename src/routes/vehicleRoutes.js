import express from "express";

import authenticate from "../middlewares/authMiddleware.js";
import authorize from "../middlewares/authorizeMiddleware.js";
import {
  createVehicle,
  getVehicles,
  getVehicle,
  getTotalVehicles,
  updateVehicle,
  deleteVehicle,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", authenticate, createVehicle);

router.get("/", getVehicles);
router.get("/total", getTotalVehicles);
router.get("/:id", getVehicle);

router.put("/:id", authenticate, updateVehicle);
router.delete("/:id", authenticate, authorize, deleteVehicle);

export default router;
