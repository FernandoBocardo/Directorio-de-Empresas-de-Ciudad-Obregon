const db = require('../config/db.js');

class UsuarioDAO {
    constructor() { };

    insertarUsuario(usuario, callback) {
        const insertQuery = `INSERT INTO usuarios (nombre, correo, password) VALUES 
                            ('${usuario.nombre}', '${usuario.correo}', '${usuario.password}')`
        db.query(insertQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    consultarUsuarios(callback) {
        const selectQuery = `SELECT * FROM usuarios`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    consultarUsuarioId(idUsuario, callback) {
        const selectQuery = `SELECT * FROM usuarios WHERE (id = '${idUsuario}')`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    consultarUsuarioCorreo(correoUsuario, callback) {
        const selectQuery = `SELECT * FROM usuarios WHERE (correo = '${correoUsuario}')`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    actualizarUsuario(usuario, callback) {
        const updateQuery = ` UPDATE usuarios SET nombre = '${usuario.nombre}', correo = '${usuario.correo}', password = '${usuario.password}' WHERE (id = ${usuario.id})`
        db.query(updateQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    eliminarUsuario(id, callback) {
        const updateQuery = ` DELETE FROM usuarios WHERE (id = ${id})`
        db.query(updateQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

}

module.exports = new UsuarioDAO();