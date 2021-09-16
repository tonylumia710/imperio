module.exports = {
    index: (req, res) => {
        res.render('index', {
            session: req.session
        })
    }
}