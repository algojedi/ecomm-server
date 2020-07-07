const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    items: [
        {
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
            },
        },
    ],
})

categorySchema.plugin(uniqueValidator)
module.exports = mongoose.model('Category', categorySchema)
