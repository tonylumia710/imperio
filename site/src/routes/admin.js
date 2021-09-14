let express = require('express');
let router = express.Router();
let multer = require('multer');
let {viewCreate, create, viewEdit, edit, products, index, deleteProduct} = require('../controllers/adminController.js');
let uploadProductFile = require('../middlewares/uploadProductsFiles');
let productValidator = require('../validations/productValidator');

/* GET */
router.get('/', index); /* Índice */
router.get('/create', viewCreate); /* Vista de creación de producto */
router.get('/edit/:id', viewEdit); /* Vista de edición de producto */
router.get('/products', products); /* Listado de productos */

/* POST */
router.post('/create', uploadProductFile.array('imgProduct'), productValidator, create); /* Creación de producto */

/* PUT */
router.put('/edit/:id', uploadProductFile.array('imgProduct'), productValidator, edit); /* Recibe datos para la edición de productos */

/* DELETE */
router.delete('/delete/:id', deleteProduct); /* Borra un producto */

module.exports = router;