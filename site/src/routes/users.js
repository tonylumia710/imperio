let express = require('express');
let router = express.Router();
let { register, login, editProfile, password } = require('../controllers/usersController.js');

/* GET - Register form */
router.get('/register', register);

/* GET - Login form */
router.get('/login', login);

/* GET - User profile */
router.get('/editProfile', editProfile);
   
/* GET - User password */
router.get('/password', password);

module.exports = router