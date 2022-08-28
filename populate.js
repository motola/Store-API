require('dotenv').config();
const mongoose = require('mongoose');
const { json } = require('express');
const connectDB = require('./config/db');
const Product = require('./model/products');
const products = require('./products.json');

console.log(products)

const start = async () => {
    connectDB();
    await Product.deleteMany();
    await Product.create(products);
    console.log("sucess")


}

start()
    

