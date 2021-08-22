let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController')

router.get('/', controller.admin);


module.exports = router;