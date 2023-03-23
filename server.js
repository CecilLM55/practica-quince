//inyecta la dependencia
const express = require('express');
const app = express();

// definicion del puerto en el que el servidor escucha
const port = process.env.PORT || 3000;

 // hacer referencia o mapeo a una carpeta virtual que se llama assets.
 app.use('/assets', express.static(__dirname + '/public'));

 //parsea las peticiones.
 //sirve para extraer el contenido del body, 
 //no va a parsear objetos anidados al seleccionar false
 app.use(express.urlencoded({extended: false}));

 app.set('view engine', 'ejs');


//ruta para visualizar el formulario de student.ejs
app.get('/student', (req, res)=> {
    res.render('student');
});

/*
app.post('/addStudent', (req, res) => {
    res.send(`  Nombre: ${req.body.nombre}
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                Tipo de sangre: ${req.body.tipoSangre}`);
});
*/

app.post('/addStudent', (req, res) => {
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

app.listen(port);