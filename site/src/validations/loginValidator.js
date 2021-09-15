const { check, body } = require('express-validator');
const { getUsers } = require('../data/dataBase');

module.exports = [
    check('email').notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('email').custom(value => {
        let user = getUsers.find(user => user.email === value);
        if(user !== undefined) {
            return true;
        } else {
            return false;
        }
    })
    .withMessage('Email no registrado'),
    
    check('contraseña').notEmpty().withMessage('Debes ingresar tu contraseña')
]