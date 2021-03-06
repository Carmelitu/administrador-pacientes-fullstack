const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// Crear el servidor
const app = express();

// Habilitar CORS
app.use(cors());

// Conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Habilitar routing
app.use('/', routes());

// Asignar puerto y arrancar servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})
