const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("herramientas", {
        arrayHerramientas: [
            {id: 'jshda', nombre: 'rex', descripcion: 'dsakj'},
            {id: 'jshda', nombre: 'rex', descripcion: 'dsakj'},
            {id: 'jshda', nombre: 'rex', descripcion: 'dsakj'},
        ]
    })
})


module.exports = router;