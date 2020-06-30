
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }

})


itemSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Item', itemSchema)
