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

    // insertProductPromise(producto) {
    //     return new Promise((resolve, reject) => {
    //         const insertQuery = `INSERT INTO products (nombre, precio, descripcion) VALUES 
    //                             ('${producto.name}', ${producto.price}, '${producto.description}')`

    //         db.query(insertQuery, (err, result) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(result);
    //             }
    //         })
    //     })
    // }

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

    // selectProductsPromise() {
    //     return new Promise((resolve, reject) => {
    //         const selectQuery = `SELECT * FROM products`;

    //         db.query(selectQuery, (err, result) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(result);
    //             }
    //         })
    //     })
    // }

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

    // updateProductsPromise(producto) {
    //     return new Promise((resolve, reject) => {
    //         const updateQuery = ` UPDATE products SET nombre = '${producto.name}', precio = ${producto.price}, descripcion = '${producto.description}' WHERE (id = ${producto.id})`
    //         db.query(updateQuery, (err, result) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(result);
    //             }
    //         })
    //     })
    // }

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

    // deleteProductPromise(id) {
    //     return new Promise((resolve, reject) => {
    //         const updateQuery = ` DELETE FROM products WHERE (id = ${id})`
    //         db.query(updateQuery, (err, result) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(result);
    //             }
    //         })
    //     })
    // }
}

module.exports = new EmpresaDAO();