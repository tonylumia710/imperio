let express = require('express');
let router = express.Router();
let {create,
    edit, products, index} = require('../controllers/adminController.js')


/* Índice */
router.get('/', index);

/* Create Product*/
router.get('/create', create);

/* Edit Product*/
router.get('/edit', edit);

/* Listado de productos */
router.get('/products', products);

module.exports = router;