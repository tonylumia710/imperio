let express = require('express');
let app = express();
let port = 3000
let path = require('path');

app.use(express.static('public'));

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let carritoRouter = require('./routes/carrito');
let loginRouter = require('./routes/login');
let passwordRouter = require('./routes/password');
let productDetailRouter = require('./routes/productDetail');
let registerRouter = require('./routes/register');
let adminCreateRouter = require('./routes/adminCreate')
let adminEditRouter = require('./routes/adminEdit')

/* Rutas */
app.use('/', indexRouter);
app.use('/carrito', carritoRouter);
app.use('/login', loginRouter);
app.use('/password', passwordRouter);
app.use('/productDetail', productDetailRouter);
app.use('/register', registerRouter);
app.use('/adminCreate', adminCreateRouter);
app.use('/adminEdit', adminEditRouter);



/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));
