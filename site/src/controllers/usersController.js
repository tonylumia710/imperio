let { getUsers, writeUsersJson } = require('../data/dataBase');
let { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs')

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
        let user = getUsers.find(user => user.id === req.session.user.id);

        res.render('users/userProfile', {
            user
        })
    },
    editProfile: (req, res) => {
        let user = getUsers.find(user => user.id === +req.params.id)

        res.render('users/editProfile', {
            user,
            session: req.session
        })
    },
    updateProfile: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let user = getUsers.find(user => user.id === +req.params.id)

            let {
                name,
                lastname,
                tel,
                address,
                dni
            } = req.body

            user.name = name
            user.lastname = lastname
            user.tel = tel
            user.address = address
            user.dni = dni
            user.avatar = req.file ? req.file.filename : user.avatar

            writeUsersJson(getUsers);

            delete user.contraseña;

            req.session.user = user;

            res.redirect('/users/profile');

        } else {
            res.render('users/editProfile', {
                errors: errors.mapped(),
                old: req.body,
                bodysession: req.session
            })
        }
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
                contraseña: bcrypt.hashSync(password, 12),
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
            let user = getUsers.find(user => user.email === req.body.email);

            req.session.user = {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            res.locals.user = req.session.user;

            res.redirect('/');

        } else {
            res.render('users/login', {
                errors: errors.mapped()
            })
        }
    }
}
