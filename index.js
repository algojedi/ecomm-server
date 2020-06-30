const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const shopRoutes = require('./routes/shop')
const sessionAuth = require('./middleware/sessionAuth')
// const Item = require('./models/Item')
// const Category = require('./models/Category')
require('dotenv').config()

const app = express()

if (process.env.NODE_ENV === 'production') {
    console.log('Running in production')
} else {
    console.log(process.env.NODE_ENV)
}

app.use(cors())
app.use(bodyParser.json())
//app.use(express.static(path.join(__dirname, 'wordsie', 'build')))
// app.use(sessionAuth)
app.use(authRoutes)
app.use(shopRoutes)


const dbn = process.env.DB_NAME
const dbu = process.env.DB_USER
const dpw = process.env.DB_PW

const MONGO_URI = `mongodb+srv://${dbu}:${dpw}@cluster0-eibwk.azure.mongodb.net/${dbn}?retryWrites=true&w=majority`

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        const PORT = process.env.PORT || 3001
        app.listen(PORT, () => {
            console.log(`Mixing it up on port ${PORT}`)
            // populate()
        })
    })
    .catch((err) => {
        console.log(err)
    })

// const populate = async () => {
//     console.log('i am populating!')
    
//     for (let [key, val] of Object.entries(SHOP_DATA)) {
//            console.log(`${key}: ${val}`);
//            console.log(val.title)
//         console.log(val.items)
//         let cat = new Category({
//             title: key,
//             items: val.items
//         })
//         try {
//            cat.save() 
//         } catch (error) {
//            console.log('there ws an error') 
//         }
     
//     }
//     // console.log(JSON.stringify(arr, null, 4))
// }
