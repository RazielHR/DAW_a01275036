const express = require('express');
const app = express(); //Creando aplicación utilizando express.
const bodyParser = require('body-parser');//Poder trabajar con mas facilmente con peticiones y formularios.
app.use(bodyParser.urlencoded({extended: false}));
const router=express.Router(); // Para utilizar métodos get y post.
// Para los estilos y funcionalidades de CSS y JS, y no se tenga que crear una ruta para cada uno.
const path= require('path');
app.use(express.static(path.join(__dirname, 'public')));
//Para poder utilizar las cookies
//AJAX-JSONS
app.use(bodyParser.json());

//Variable Global de TEMPLATES
app.set('view engine', 'ejs');
app.set('views', 'views'); 
const rutasActividades = require('./routes/actividades.js');
app.use('/actividades', rutasActividades);
app.get('/', (request, response, next) => {
    response.redirect('/actividades');
});

///////////////////////////////////////////////////////////////
// Poner un 404 a todas las rutas que son incorrectas:
app.use((request, response, next) => {
    console.log('Error 404');
    response.status(404);
    response.send('Lo sentimos esta página no existe!'); //Manda la respuesta
});

app.listen(3000);