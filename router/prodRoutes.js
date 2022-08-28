const express = require('express');
const { getAllProducts } = require('../controllers/prodControllers');

const router = express.Router();




router.get('/', (req,res) => {
   res.json('Product Router')
});


router.get('/static', getAllProducts)



module.exports = router