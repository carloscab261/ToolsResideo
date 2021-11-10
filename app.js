const express = require('express');
const app=express();

const port = process.env.PORT || 3001;

//Motor de plantillas
app.set('view engine', 'ejs' );
app.set('views', __dirname + '/views');

//Ruta por defecto
app.use(express.static(__dirname + '/public'));



//Rutas de las paginas web


app.use('/', require('./router/RutasWeb'));
app.use('/herramientas', require('./router/Herramientas'));

app.use('/', require('./router/Inventario'));

app.use('/solicitudes', require('./router/Solicitudes'));


//Pagina de error 404 cuando ponen una pagina o direccion que no existe
app.use((req,res,next)=>{
    res.status(404).render("404");
});


//Puerto escuchando
app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
});