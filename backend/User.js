const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: Number,
  mobile: String,
  password: String,

  balance: { 
    type: Number, 
    default: 0 
  },

  sellActive: {
    type: Boolean,
    default: false
  },

  banks: [
    {
      bankName: String,
      acc: String,
      ifsc: String
    }
  ]

});

module.exports = mongoose.model("User", userSchema);