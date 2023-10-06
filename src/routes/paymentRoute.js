import express from "express";
import {
  createPayment,
  getPayment,
  getPayments,
  updatePayment,
  deletePayment,
  getTotal,
} from "../controllers/paymentController.js";

import authenticate from "../middlewares/authMiddleware.js";
import authorize from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.use(authenticate, authorize);

router.post("/", createPayment);

router.get("/", getPayments);
router.get("/total", getTotal);
router.get("/:id", getPayment);

router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

export default router;
