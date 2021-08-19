let express = require('express');
let router = express.Router();
let controller = require('../controllers/passwordController')

router.get('/', controller.password);


module.exports = router;