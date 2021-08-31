let express = require('express');
let router = express.Router();
let {adminCreate,
    adminEdit, products, index} = require('../controllers/adminController.js')


/* Create Product*/
router.get('/adminCreate', adminCreate)
/* Edit Product*/
router.get('/adminEdit', adminEdit)

router.get('/products', products)

router.get('/', index)


module.exports = router;