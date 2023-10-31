const db = require('../config/db.js');

class EmpresaDAO {
    constructor() { };

    insertarEmpresa(empresa, callback) {
        const insertQuery = `INSERT INTO empresas (nombre, ubicacion, telefono, descripcion, horario, tipoEmpresa, idCategoria) VALUES 
                            ('${empresa.nombre}', '${empresa.ubicacion}', '${empresa.telefono}', 
                            '${empresa.descripcion}', '${empresa.horario}', '${empresa.tipoEmpresa}', '${empresa.idCategoria}')`
        db.query(insertQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    consultarEmpresas(callback) {
        const selectQuery = `SELECT * FROM empresas`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    consultarEmpresaId(idEmpresa, callback) {
        const selectQuery = `SELECT * FROM empresas WHERE (id = '${idEmpresa}')`;

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    actualizarEmpresa(empresa, callback) {
        const updateQuery = ` UPDATE empresas SET nombre = '${empresa.nombre}', ubicacion = '${empresa.ubicacion}', telefono = '${empresa.telefono}', descripcion = '${empresa.descripcion}', horario = '${empresa.horario}', tipoEmpresa = '${empresa.tipoEmpresa}', idCategoria = '${empresa.idCategoria}' WHERE (id = ${empresa.id})`
        db.query(updateQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }

    eliminarEmpresa(id, callback) {
        const updateQuery = ` DELETE FROM empresas WHERE (id = ${id})`
        db.query(updateQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        })
    }
}

module.exports = new EmpresaDAO();