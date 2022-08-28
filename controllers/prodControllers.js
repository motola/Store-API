const mongoose = require('mongoose');
const Product = require('../model/products');



// Implementing offset Pagination

const getAllProducts = async (req, res, next) => {

    try {
       const { page, limit } = req.query


       const products = await Product.find({}).limit(limit).skip((page -1) * limit)
       const count = await Product.countDocuments()
       const currentPage = page
       res.status(200).json({
        data: products,
        totalPages: Math.ceil(count / limit),
        currentPage
       })


    }

    catch (error) {
       res.status(500).json({ msg: error })
    }



}

// Implementing a static filter

const getAllProductsStatic = async (req, res, next) => {

    try {

        const products = await Product.find({ price: { $gt: 30 } })
        .sort('price')
        .select('name price')
        res.status(200).send({ data: products})

    }

    catch (error) {
       res.status(500).json({ msg: error })
    }



}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}