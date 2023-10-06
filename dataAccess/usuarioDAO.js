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

module.exports = new UsuarioDAO();