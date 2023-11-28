const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');
const authController = require('../controllers/authController');

// Rutas
router.get('/', authController.verifyToken, empresaController.getAllEmpresas);
router.post('/', authController.verifyToken, empresaController.addEmpresa);
router.get('/:id', authController.verifyToken, empresaController.getEmpresaById);
router.put('/:id', authController.verifyToken, empresaController.updateEmpresa);
router.delete('/:id', authController.verifyToken, empresaController.deleteEmpresa);

module.exports = router;