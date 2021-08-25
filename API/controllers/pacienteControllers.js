const Paciente = require('../models/Paciente');

// Cuando se crea nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    // Crear objeto de paciente
    const paciente = new Paciente(req.body);
    
    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agregó correctamente'});
        console.log(paciente);
        
    } catch (error) {
        console.error(error);
        next();
    }


}
