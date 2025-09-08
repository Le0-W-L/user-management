const mongoose = require("../config/MongoDB")

const loginLogSchema = new mongoose.Schema({
  userId: String,
  ip: String,
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model("LoginLog", loginLogSchema)