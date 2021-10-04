let { getProducts } = require('../data/dataBase')

module.exports = {
  detail:(req, res) => {
    let productID = req.params.id;
    let product =products.find(product => product.id === productID)
    let productSlider = products.filter(item => item.category === product.category)

    res.render('productDetail', {
      titleSlider: 'Productos relacionados',
      productSlider, 
      product
    })
  }
}

module.exports = {
    detail: (req, res) => {
      res.render('product/detail', {
        session: req.session
      })
    },
    carrito: (req, res) => {
      res.render('product/carrito', {
        session: req.session
      })
    },
    detail: (req, res) => {
      let producto = getProducts.find(producto => {
        return producto.id === +req.params.id
      })
      res.render('product/productDetail', { producto: producto, session: req.session })
    }
}
