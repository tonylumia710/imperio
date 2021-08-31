module.exports = {
    adminCreate: (req, res) => {
        res.render("admin/adminCreate")
    },
     adminEdit: (req, res) => {
        res.render("admin/adminEdit")
    },
    products: (req, res) => {
        res.render('admin/adminProducts')
    }
}