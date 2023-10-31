const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
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
        UsuarioDAO.consultarUsuarioCorreo(req.body.correo, (result, err) => {
            if (err) {
                console.error('Error al consultar la base de datos' + err);
            } else {
                resultado = result[0];
                if (result.length === 0) {
                  return res.status(404).json({ error: 'El correo introducido no esta registrado' });
                }
          comparar(req.body.password, resultado.password)
          .then((esValida) => {
            if (esValida) {
                console.log('La contraseña es válida');
                const expiresIn = 40; // 60 segundos (1 minutos)
                const token = jwt.sign({ userId: result[0].id }, secretKey, { expiresIn });
                res.status(200).json({ token });
                console.log(token);
            } else {
              console.log('La contraseña no es válida');
              res.status(401).json({ mensaje: 'El correo o la contraseña son incorrectos' });
              return;
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            res.status(500).json(error);
          });          
            }
          })
          

     } catch (error) {
        console.log(error);
         res.status(500).json({ mensaje: 'Error al iniciar sesión' });
     }
});

async function comparar(password1, password2)
{
    const esContraseñaValida = bcrypt.compare(password1, password2);
    return esContraseñaValida;
}

module.exports = router;
