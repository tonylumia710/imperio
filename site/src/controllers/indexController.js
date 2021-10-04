let dataBase = require("../data/dataBase");

module.exports = {
    index: (req, res) => {
        res.render('index', {
            titleCards: "Productos destacados",
            session: req.session,
            productsCards: dataBase.getProducts 
        })
    }
}