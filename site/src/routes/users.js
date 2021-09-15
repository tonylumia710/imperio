let express = require('express');
let router = express.Router();
let { register, login, profile, password, processRegister, processLogin } = require('../controllers/usersController.js');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');

/* GET */
router.get('/register', register); /* Vista del formulario de registro */
router.get('/login', login); /* Vista del formulario de login */
router.get('/profile', profile); /* Vista del perfil de usuario */
router.get('/password', password); /* Vista del formulario de recuperación de contraseña */

/* POST */
router.post('/register', registerValidator, processRegister);
router.post('/login', loginValidator, processLogin);

module.exports = router;