import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "Please provide a name for the stock"],
  },

  itemCode: {
    type: String,
    required: [true, "Please provide a serial for the stock"],
    unique: true,
  },
  numberOfItem: {
    type: Number,
    required: [true, "Please provide a number of item for the stock"],
  },
});

const Stock = mongoose.model("Stock", stockSchema);
export default Stock;
