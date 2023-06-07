const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()
const port = process.env.port || 7000
const authRouter = require("./routes/authRoute")


// MONGODB CONNECTION
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection 
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to DatabaseSuccessfully!!!'))





app.use(`/api`, (req, res) => {
    res.send("Hello from server side")
})

app.use(`/api/users`, authRouter)
app.listen(port, () => console.log(`Server listening at port ${port}`))