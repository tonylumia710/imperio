let express = require('express');
let app = express();
let port = 3000
let path = require('path');

app.use(express.static('public'));

/* Ruta para Home*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}\n http://localhost:${port}`))