const db = require('./config/db.js');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

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



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
