let express = require('express');
let router = express.Router();
let controller = require('../controllers/editProfileController')

router.get('/', controller.editProfile);


module.exports = router;