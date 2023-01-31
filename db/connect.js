const mongoose = require("mongoose")
require("dotenv").config()

function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to DB")
  } catch (err) {
    console.log("Error Occured while connecting to database")
  }
}

module.exports = { connect }
