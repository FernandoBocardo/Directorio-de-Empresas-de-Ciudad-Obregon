const db = require('../config/db.js');

class EmpresaDAO {
    constructor() { };

    insertarEmpresa(empresa, callback) {
        const insertQuery = `INSERT INTO products (nombre, ubicacion, telefono, descripcion, horario, tipoEmpresa) VALUES 
                            ('${empresa.nombre}', ${empresa.ubicacion}, '${empresa.telefono}', 
                            '${empresa.descripcion}', '${empresa.horario}', '${empresa.tipoEmpresa}')`
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

    consultarEmpresa(callback) {
        const selectQuery = `SELECT * FROM empresa`;

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
        const updateQuery = ` UPDATE products SET nombre = '${empresa.name}', precio = ${empresa.price}, descripcion = '${empresa.description}' WHERE (id = ${empresa.id})`
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
        const updateQuery = ` DELETE FROM empresa WHERE (id = ${id})`
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