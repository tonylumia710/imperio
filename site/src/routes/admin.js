let express = require('express');
let router = express.Router();
let {adminCreate,
    adminEdit, products} = require('../controllers/adminController.js')


/* Create Product*/
router.get('/adminCreate', adminCreate)
/* Edit Product*/
router.get('/adminEdit', adminEdit)

router.get('/products', products)


module.exports = router;