const express = require('express')
const cors = require('cors')
const {v4: uuid} = require("uuid")
const app = express()
const mainRouter = require('./routes/mainRouter')


app.use(cors())
app.use(express.json())

app.listen(4000)

app.use('/', mainRouter)

