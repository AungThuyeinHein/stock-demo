import Stock from "../models/stock.model.js";
import CustomError from "../utils/customError.js";
import asyncErrorHandler from "../utils/asyncErrorHandler.js";

export const createStock = asyncErrorHandler(async (req, res, next) => {
  const stock = await Stock.create(req.body);
  res.status(201).json({
    code: 201,
    status: "success",
    message: "Stock created successfully",
    data: stock,
  });
});

export const getAllStock = asyncErrorHandler(async (req, res, next) => {
  const stock = await Stock.find();
  res.status(200).json({
    code: 200,
    status: "success",
    message: "Stock fetched successfully",
    data: stock,
  });
});

export const getStockById = asyncErrorHandler(async (req, res, next) => {
  const stock = await Stock.findById(req.params.id);
  res.status(200).json({
    code: 200,
    status: "success",
    message: "Stock fetched successfully",
    data: stock,
  });
});
