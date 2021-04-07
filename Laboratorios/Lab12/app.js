const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
const misRutas = require('./routes/nombre_archivo');
const miModulo = require('./routes/modulo');

app.use('/misRutas', misRutas);
app.use('/miModulo', miModulo);
app.get('/', (request, response, next) => {
    response.send('<h1>Pagina Principal</h1><br><a href="/misRutas">click para ir a modulo 1</a><br><a href="/miModulo">click para ir a modulo 2</a>');
});

app.listen(3000);