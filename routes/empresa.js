const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

// Rutas
router.get('/', empresaController.getAllEmpresas);
router.post('/', empresaController.addEmpresa);
router.get('/:id', empresaController.getEmpresaById);
router.put('/:id', empresaController.updateEmpresa);
router.delete('/:id', empresaController.deleteEmpresa);

module.exports = router;