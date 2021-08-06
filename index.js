let express = require('express');
let app = express();
let port = 3000
let path = require('path');

app.use(express.static('public'));

/* Ruta para Home*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views/index.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'views/login.html')); 
})

app.get('/password', (req, res) => {
    res.sendFile(path.join(__dirname,'views/password.html')); 
})

app.get('/carrousel.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrousel.html'))
})

app.get('/carrito.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
})

app.get('/header.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/header.html'))
})
app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\n http://localhost:${port}`));
