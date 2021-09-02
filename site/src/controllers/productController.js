let { getProducts } = require('../data/dataBase')

module.exports = {
    productDetail: (req, res) => {
      res.render('product/productDetail')
    },
    carrito: (req, res) => {
      res.render('product/carrito')
    },
    detail: (req, res) => {
      let producto = getProducts.find(producto => {
        return producto.id === +req.params.id
      })
      res.render('product/productDetail', { producto: producto })
    }
}
