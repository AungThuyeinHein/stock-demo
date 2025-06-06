import express from "express";
import {
  createStock,
  getAllStock,
  getStockById,
  stockCheckbyItemCode,
} from "../controllers/stock.controller.js";

const router = express.Router();

router.post("/stock", createStock);
router.get("/stock", getAllStock);
router.get("/stock/:id", getStockById);
router.get("/stock/check/:itemCode", stockCheckbyItemCode);

export default router;
