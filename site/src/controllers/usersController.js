let { getUsers, writeUsersJson } = require('../data/dataBase');
let { validationResult } = require('express-validator');

module.exports = {
    /* Login form */
    login: (req, res) => {
        res.render('users/login')
    },
    /* Register form */
    register: (req, res) => {
        res.render('users/register')  
    },
    /* User profile */
    profile: (req, res) =>{
        res.render('users/editProfile')
    },
    /* User password */
    password: (req, res) => {
        res.render('users/password')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let lastId = 0;

            getUsers.forEach(usuarios => {
                if (usuarios.id > lastId) {
                    lastId = usuarios.id
                }
            })

            let {
                name,
                lastname,
                email,
                password
            } = req.body

            let newUser = {
                id: lastId + 1,
                name,
                lastname,
                email,
                contraseña: password,
                avatar: req.file ? req.file.filename : 'default-image.png',
                rol: 'ROL_USER',
                tel: '',
                address: '',
                dni: '',
                city: '',
                province: ''
            }

            getUsers.push(newUser);

            writeUsersJson(getUsers);

            res.redirect('/users/login');

        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {

        } else {
            res.render('users/login', {
                errors: errors.mapped()
            })
        }
    },
}
