const db = require('../config/db.js');

class CategoriaDAO {
    constructor() { };

    insertarCategoria(categoria, callback) {
        const insertQuery = `INSERT INTO categorias (nombre, descripcion) VALUES 
                            ('${categoria.nombre}', '${categoria.descripcion}')`
        db.query(insertQuery, (err, result) => {
            if (err) {
                console.log("err");
                callback(err);
            } else {
                console.log("result");
                callback(result);
            }
        })
    }

    consultarCategorias(callback) {
        const selectQuery = `SELECT * FROM categorias`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    consultarCategoriaId(idCategoria, callback) {
        const selectQuery = `SELECT * FROM categorias WHERE (id = '${idCategoria}')`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    actualizarCategoria(categoria, callback) {
        const updateQuery = ` UPDATE categorias SET nombre = '${categoria.nombre}', descripcion = '${categoria.descripcion}' WHERE (id = ${categoria.id})`
        db.query(updateQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    eliminarCategoria(id, callback) {
        const updateQuery = ` DELETE FROM categorias WHERE (id = ${id})`
        db.query(updateQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }


}

module.exports = new CategoriaDAO();