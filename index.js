const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor de express
const app = express();
// Conexion a la Base de Datos
dbConnection();
// Uso de cors
app.use(cors());
// Directorio publico
app.use( express.static('public') );
// Lectura y parseo del body
app.use( express.json() );
// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );



// Escuchar las peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
});