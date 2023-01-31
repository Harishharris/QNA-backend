const express = require("express")
const app = express()
require("dotenv").config()
const { connect } = require("./db/connect")
const router = require("./routes/route")
const cors = require("cors")

const PORT = process.env.PORT

app.use(express.json())

app.use(cors())

app.use(router)

app.listen(PORT, err => {
  if (err) {
    console.log("err")
  } else {
    console.log(`Server running at port ${PORT}`)
  }
  connect()
})
