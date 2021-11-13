const express = require('express');
const app=express();

const port = process.env.PORT || 3001;

//Motor de plantillas
app.set('view engine', 'ejs' );
app.set('views', __dirname + '/views');

//Ruta por defecto
app.use(express.static(__dirname + '/public'));





//Rutas
app.get('/',(req,res) => {
    res.render("index");
});



app.get('/solicitudes', (req,res) =>{
    res.render("solicitudes")
});





//Puerto escuchando
app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
});

//Pagina de error 404 cuando ponen una pagina o direccion que no existe
app.use((req,res,next)=>{
    res.status(404).render("404");
});
