let express = require('express');
let router = express.Router();
let { detail, carrito} = require('../controllers/productController.js')

/* GET - Detalle del producto elegido */
router.get('/detail/:id', detail);

/* GET - carrito */
router.get('/carrito', carrito)

module.exports = router