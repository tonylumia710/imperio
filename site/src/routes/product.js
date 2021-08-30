let express = require('express');
let router = express.Router();
let { productDetail, carrito} = require('../controllers/productController.js')

/* GET - Product Detail */
router.get('/productDetail', productDetail)
/* GET - carrito */
router.get('/carrito', carrito)

module.exports = router