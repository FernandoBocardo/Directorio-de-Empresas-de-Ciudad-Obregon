const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas
router.get('/', usuarioController.getAllUsuarios);
router.post('/', usuarioController.addUsuario);
router.get('/:id', usuarioController.getUsuarioById);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;