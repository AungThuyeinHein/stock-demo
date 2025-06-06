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
    message: "Get all of the stock data.",
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

export const stockCheckbyItemCode = asyncErrorHandler(
  async (req, res, next) => {
    const { itemCode } = req.params;
    const stock = await Stock.findOne({ itemCode });
    console.log("stock", stock);

    if (!stock) {
      return next(new CustomError(404, "Stock not found"));
    }
    if (stock.numberOfItem <= 0) {
      return res.status(200).json({
        code: 200,
        status: false,
        data: { message: "Stock is out of stock" },
      });
    }
    res.status(200).json({
      code: 200,
      status: true,
      data: {
        message: "Stock fetched successfully",
      },
    });
  }
);
