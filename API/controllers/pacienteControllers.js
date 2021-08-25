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
        console.log(error);
        next();
    }


}

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene paciente por Id
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina paciente por ID
exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}