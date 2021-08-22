let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminEditController')

router.get('/', controller.adminEdit);


module.exports = router;