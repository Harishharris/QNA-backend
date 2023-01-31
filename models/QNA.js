const mongoose = require("mongoose")

let QNA = mongoose.Schema({
  question: {
    type: String,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [String],
  },
})

module.exports = QNA = mongoose.model("QNA", QNA)
