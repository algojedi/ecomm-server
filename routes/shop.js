const path = require('path')
const express = require('express')
const Category = require('../models/Category')

const router = express.Router()

// send back all the products
router.get('/products', async (req, res) => {
    try {
        const category = await Category.find()
        res.status(200).json(category)
    } catch (error) {
        console.log(error.message || error)
        res.status(500).send('Connection error')    

    } 
})



module.exports = router
