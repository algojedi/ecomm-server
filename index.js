const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const shopRoutes = require('./routes/shop')
// const sessionAuth = require('./middleware/sessionAuth')
require('dotenv').config()

const app = express()

if (process.env.NODE_ENV === 'production') {
    console.log('Running in production')
} else {
    console.log(process.env.NODE_ENV)
}

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(authRoutes)
app.use(shopRoutes)


const dbn = process.env.DB_NAME
const dbu = process.env.DB_USER
const dpw = process.env.DB_PW

const MONGO_URI = `mongodb+srv://${dbu}:${dpw}@cluster0-eibwk.azure.mongodb.net/${dbn}?retryWrites=true&w=majority`

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => {
        const PORT = process.env.PORT || 3001
        app.listen(PORT, () => {
            console.log(`Mixing it up on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })


