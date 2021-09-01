module.exports = {
    create: (req, res) => {
        res.render("admin/adminCreate")
    },
    edit: (req, res) => {
        res.render("admin/adminEdit")
    },
    products: (req, res) => {
        res.render('admin/adminProducts')
    },
    index: (req, res) => {
        res.render('admin/adminIndex')
    }
}