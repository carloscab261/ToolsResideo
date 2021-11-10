const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("solicitudes", {
        arraySolicitudes: [
            {nombre: 'Taladro', enPosecion: 'Carlos'}, 
            {nombre: 'Broca', enPosecion: 'Juanito'}, 
            {nombre: 'Moto tool', enPosecion: 'Adrian'}, 
        ]
    })
})

module.exports = router;