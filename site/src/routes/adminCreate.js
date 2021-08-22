let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminCreateController')

router.get('/', controller.adminCreate);


module.exports = router;