module.exports = (err, req, res, next) => {
    console.error(err);
  
    if (err.message.startsWith('Información incompleta:')) {
      res.status(400).json({ error: err.message }); // Respuesta de error 400 Bad Request.
    } else if(err.message === "No se especificaron campos a actualizar") {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Ha ocurrido un error en el servidor' });
    }
  };
  