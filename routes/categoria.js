const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rutas
router.get('/', categoriaController.getAllCategorias);
router.post('/', categoriaController.addCategoria);
router.get('/:id', categoriaController.getCategoriaById);
router.put('/:id', categoriaController.updateCategoria);
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;

