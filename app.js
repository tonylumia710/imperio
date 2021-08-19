let express = require('express');
let app = express();
let port = 3000
let path = require('path');

app.use(express.static('public'));

/* ENRUTADORES */
let indexRouter = require('./src/routes/index');
let carritoRouter = require('./src/routes/carrito');
let loginRouter = require('./src/routes/login');
let passwordRouter = require('./src/routes/password');
let productDetailRouter = require('./src/routes/productDetail');
let registerRouter = require('./src/routes/register');

/* Rutas */
app.use('/', indexRouter);
app.use('/carrito', carritoRouter);
app.use('/login', loginRouter);
app.use('/password', passwordRouter);
app.use('/productDetail', productDetailRouter);
app.use('/register', registerRouter);



/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));
