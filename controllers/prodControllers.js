const mongoose = require('mongoose');
const Product = require('../model/products');


const getAllProducts = async (req, res, next) => {

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
}