let express = require('express');
let router = express.Router();
let { register, login, profile, password, processRegister, processLogin, editProfile, updateProfile } = require('../controllers/usersController.js');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
let uploadUsersAvatar = require('../middlewares/uploadUserAvatarFiles');

/* GET */
router.get('/register', register); /* Vista del formulario de registro */
router.get('/login', login); /* Vista del formulario de login */
router.get('/profile', profile); /* Vista del perfil de usuario */
router.get('/password', password); /* Vista del formulario de recuperación de contraseña */
router.get('/profile/edit/:id', editProfile); 

/* POST */
router.post('/register', registerValidator, processRegister);
router.post('/login', loginValidator, processLogin);

/* PUT */
router.put('/profile/edit/:id', uploadUsersAvatar.single('avatar'), updateProfile)

module.exports = router;