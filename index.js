require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.port || 7000
const bodyParser = require("body-parser")
const authRouter = require("./routes/authRoute")


// MONGODB CONNECTION
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection 
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to DatabaseSuccessfully!!!'))






app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(`/api/users`, authRouter)
app.listen(port, () => console.log(`Server listening at port ${port}`))