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
    editProfile: (req, res) =>{
        res.render('users/editProfile')
    },
    /* User password */
    password: (req, res) => {
        res.render('users/password')
    }
}
