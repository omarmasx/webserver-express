const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); //importacion de helpers.js

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //parcial es bloque de codigo que se puede reutilizar
app.set('view engine', 'hbs');  //SOLO CON EXPRESS


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ferNando poLos'
        // ,anio1: new Date().getFullYear();
    });
});// SOLO CON EXPRESS

app.get('/about', (req, res) => {

    res.render('about');
     //cortamos el año y lo pusimos como helper.js como si fuera una funcion para ahorrar escitura repetida en pat'/' y 'about', esta funcion sera llamado por el HBS como si fuera un parametro con el nombre de 'getAnio'
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});