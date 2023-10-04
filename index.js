const db = require('./config/db.js');
const empresaDAO = require('./dataAccess/empresaDAO.js');
const Empresa = require('./models/empresaModel.js');

db.connect((err) => {
    if (err) {
        console.log('error al conectar la base de datos' + err);
        return;
    }
    console.log('conexion exitosa');


    const nuevaEmpresa = new Empresa('Sabritas', 'Parque Industrial', 64414163352, 'Empresa nacional', 'Lunes-Viernes', 'Manufacturera');

      productDAO.insertProduct(nuevaEmpresa, (result, err) => {
         if (err) {
             console.error('error al insertar en la base datos' + err);
         } else {
              console.log('emresa insertada' + result);
          }
      })

    //   productDAO.insertProductPromise(newProduct).then(resolve => {
    //       console.log(resolve)
    //   }).catch(reject => {
    //       console.log('se agrego el producto')
    //   })


    // productDAO.selectProducts((result, err) => {
    //     if (err) {
    //         console.error('error al consultar la base de datos' + err);
    //     } else {
    //         console.log(result);
    //     }
    // })

    //   productDAO.selectProductsPromise().then(resolve => {
    //       console.log(resolve)
    //   }).catch(reject => {
    //       console.log(reject)
    //   })

    // productDAO.updateProducts(newProduct, (result, err) => {
    //     if (err) {
    //         console.error('error al actualizar la base de datos' + err);
    //     } else {
    //         console.log('se actualizo la base de datos');
    //     }
    // })

    //    const newProduct = new Product(3, 'RPG', 10000, 'Tumba avion');

    //   productDAO.updateProductsPromise(newProduct).then(resolve =>{
    //       console.log('se actualizo la base de datos');
    //   }).catch(reject=>{
    //       console.error('error al actualizar la base de datos' + reject);
    //   })

    // productDAO.deleteProduct(3, (result, err) => {
    //     if (err) {
    //         console.error('error al borrar de la base datos' + err);
    //     } else {
    //         console.log('producto borrado');
    //     }
    // })

    //  productDAO.deleteProductPromise(1).then(resolve => {
    //      console.log('producto borrado');
    //  }).catch(reject => {
    //      console.error('error al borrar de la base de datos' + reject);
    //  })


    db.end((err) => {
        if (err) {
            console.log('error al desconectar la base de datos');
            return;
        }
        console.log('desconexion exitosa');
    })
})