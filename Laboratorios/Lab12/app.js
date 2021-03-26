const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
const misRutas = require('./routes/nombre_archivo');

app.use('/modulo', misRutas);
app.get('/', (request, response, next) => {
    response.send('<a href="/modulo">Ejemplo 1</a>');
});
app.use((request, response, next) => {
    response.send('404 NOT FOUND'); 
});
app.listen(3000);