const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: Number,
  orderId: String,
  amount: Number,
  walletAddress: String,
  txHash: { type: String, default: null },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);