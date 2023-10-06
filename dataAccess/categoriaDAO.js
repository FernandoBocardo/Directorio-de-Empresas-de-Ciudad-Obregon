const db = require('../config/db.js');

class CategoriaDAO {
    constructor() { };

    insertarCategoria(categoria, callback) {
        const insertQuery = `INSERT INTO categorias (nombre, descripcion) VALUES 
                            ('${categoria.nombre}', '${categoria.descripcion}')`
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

module.exports = new CategoriaDAO();