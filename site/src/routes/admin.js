let express = require('express');
let router = express.Router();
let {viewCreate, create, viewEdit, edit, products, index, deleteProduct} = require('../controllers/adminController.js')

/* GET */
router.get('/', index); /* Índice */
router.get('/create', viewCreate); /* Vista de creación de producto*/
router.get('/edit/:id', viewEdit); /* Vista de edición de producto*/
router.get('/products', products); /* Listado de productos */

/* POST */
router.post('/create', create); /* Creación de producto */

/* PUT */
router.put('/edit/:id', edit); /* Recibe datos para la edición de productos */

/* DELETE */
router.delete('/delete/:id', deleteProduct); /* Borra un producto */

module.exports = router;