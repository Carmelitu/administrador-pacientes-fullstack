const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function () {

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', pacienteController.nuevoCliente);

    // Obtiene registros en DB
    router.get('/pacientes', pacienteController.obtenerPacientes);

    // Obtiene paciente con ID
    router.get('/pacientes/:id', pacienteController.obtenerPaciente);

    // Actualizar paciente con ID
    router.put('/pacientes/:id', pacienteController.actualizarPaciente);

    // Elimina paciente con ID
    router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

    return router;
}



