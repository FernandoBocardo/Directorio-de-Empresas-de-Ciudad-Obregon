const db = require('./config/db.js');
const express = require('express');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Middleware de las rutas
const categoriaRoutes = require('./routes/categoria');
app.use('/categoria', categoriaRoutes);
const empresaRoutes = require('./routes/empresa');
app.use('/empresa', empresaRoutes);
const usuarioRoutes = require('./routes/usuario');
app.use('/usuario', usuarioRoutes);
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Middleware de errores
//const errorHandler = require('./middlewares/errorHandler');
//app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
