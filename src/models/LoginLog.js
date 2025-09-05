const mongoose = require('mongoose')

const loginLogSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    ipAddress: { type: String },
    userAgent: { type: String },
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('LoginLog', loginLogSchema)