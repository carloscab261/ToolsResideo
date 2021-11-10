const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("index", {
        arrayHerramientas: [
            {id: '1', nombre: 'Taladro', descripcion: 'Taladro', status: 'Disponible', enPosecion: 'Carlos'},
            {id: '2', nombre: 'Broca', descripcion: 'Broca', status: 'En uso', enPosecion: 'Omar'},
            {id: '3', nombre: 'Multimetro', descripcion: 'Multimetro', status: 'Disponible', enPosecion: 'Armando'},
            {id: '4', nombre: 'Moto tool', descripcion: 'Moto tool', status: 'En uso', enPosecion: 'Israel'},
            {id: '5', nombre: 'Grapadora', descripcion: 'Grapadora', status: 'Disponible', enPosecion: 'Pablo'},
        ]
    })
})

module.exports = router;