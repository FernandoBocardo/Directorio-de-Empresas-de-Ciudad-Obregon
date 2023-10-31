const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const Usuario = require('../models/usuarioModel');
const UsuarioDAO = require('../dataAccess/usuarioDAO');

// Cargar la clave secreta desde las variables de entorno
const secretKey = "CLAVESECRETAOWOXD";

const schemaLogin = Joi.object({
    correo: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });


//Ruta para autenticar y obtener un token JWT
router.post('/login', async (req, res) => {
    const { error, value } = schemaLogin.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    var resultado;
     try {
        await UsuarioDAO.consultarUsuarioCorreo(req.body.correo, (result, err) => {
            if (err) {
                console.error('Error al consultar la base de datos' + err);
            } else {
                //console.log(result);
                if (result.length === 0) {
                  return res.status(404).json({ error: 'El correo introducido no esta registrado' });
                }
                resultado = result[0];
            }
          })
          console.log(req.body.password)
          console.log(resultado.password);
          const esContraseñaValida = await bcrypt.compare(req.body.password, resultado[0].password);
          console.log(esContraseñaValida);
          if (!esContraseñaValida) {
              res.status(401).json({ mensaje: 'El correo o la contraseña son incorrectos' });
              return;
          }
  
          const expiresIn = 40; // 60 segundos (1 minutos)
  
          const token = jwt.sign({ userId: result[0].id }, secretKey, { expiresIn });
  
          res.json({ token });
          console.log(token)

     } catch (error) {
         res.status(500).json({ mensaje: 'Error al iniciar sesión' });
     }
});

module.exports = router;
