let express = require('express');
let app = express();
let port = 3000
let path = require('path');

app.use(express.static('public'));

/* ENRUTADORES */
let indexRouter = require('./src/routes/index');

/* Rutas */
app.use('/', indexRouter);

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\nhttp://localhost:${port}`));
