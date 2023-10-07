const db = require('./config/db.js');
const empresaDAO = require('./dataAccess/empresaDAO.js');
const categoriaDAO = require('./dataAccess/categoriaDAO.js');
const usuarioDAO = require('./dataAccess/usuarioDAO.js');
const Empresa = require('./models/empresaModel.js');
const Categoria = require('./models/categoriaModel.js');
const Usuario = require('./models/usuarioModel.js');

db.connect((err) => {
    if (err) {
        console.log('error al conectar la base de datos' + err);
        return;
    }
    console.log('conexion exitosa');

    //--------------------------------------------------------------------------------------------------EMPRESA--------------------------------------------------------------------------------------------------

    const nuevaEmpresa = new Empresa(0, 'Empresa nueva', 'Parque Industrial', 64414163352, 'Empresa nacional', 'Lunes-Viernes', 'Manufacturera', 1);

      empresaDAO.insertarEmpresa(nuevaEmpresa, (result, err) => {
         if (err) {
             console.error('error al insertar en la base datos' + err);
         } else {
              console.log('empresa insertada' + result);
          }
      })

    empresaDAO.consultarEmpresas((result, err) => {
         if (err) {
             console.error('error al consultar la base de datos' + err);
         } else {
             console.log(result);
         }
     })

    const empresaActualizar = new Empresa(1, 'Sabritas', 'Parque Industrial', 64414163352, 'Empresa nacional', 'Lunes-Viernes', 'Manufacturera', 1);

    empresaDAO.actualizarEmpresa(empresaActualizar, (result, err) => {
         if (err) {
             console.error('error al actualizar la base de datos' + err);
         } else {
             console.log('se actualizo la base de datos');
         }
     })

    empresaDAO.eliminarEmpresa(6, (result, err) => {
         if (err) {
             console.error('error al borrar de la base datos' + err);
         } else {
             console.log('empresa borrada');
         }
     })


     //--------------------------------------------------------------------------------------------------CATEGORIA--------------------------------------------------------------------------------------------------

     
    const nuevaCategoria = new Categoria(0, 'Ventas', 'Empresa local');

    categoriaDAO.insertarCategoria(nuevaCategoria, (result, err) => {
       if (err) {
           console.error('error al insertar en la base datos' + err);
       } else {
            console.log('categoria insertada' + result);
        }
    })

    categoriaDAO.consultarCategorias((result, err) => {
        if (err) {
            console.error('error al consultar la base de datos' + err);
        } else {
            console.log(result);
        }
    })

    const categoriaActualizar = new Categoria(2, 'Distribuidor', 'Trigo del Valle del Yaqui');

    categoriaDAO.actualizarCategoria(categoriaActualizar, (result, err) => {
         if (err) {
             console.error('error al actualizar la base de datos' + err);
         } else {
             console.log('se actualizo la base de datos');
         }
     })


     categoriaDAO.eliminarCategoria(3, (result, err) => {
        if (err) {
            console.error('error al borrar de la base datos' + err);
        } else {
            console.log('categoria borrada');
        }
    })


     //--------------------------------------------------------------------------------------------------USUARIO--------------------------------------------------------------------------------------------------

          
    const nuevoUsuario = new Usuario(0, 'Guillermo Diaz', 'willy@gmail.com', 'paradise');

    usuarioDAO.insertarUsuario(nuevoUsuario, (result, err) => {
       if (err) {
           console.error('error al insertar en la base datos' + err);
       } else {
            console.log('usuario insertada' + result);
        }
    })

    usuarioDAO.consultarUsuarios((result, err) => {
        if (err) {
            console.error('error al consultar la base de datos' + err);
        } else {
            console.log(result);
        }
    })

    const usuarioActualizar = new Usuario(2, 'Samuel de Luqie', 'vegetta777@gmai.com', 'planeta');

    usuarioDAO.actualizarUsuario(usuarioActualizar, (result, err) => {
         if (err) {
             console.error('error al actualizar la base de datos' + err);
         } else {
             console.log('se actualizo la base de datos');
         }
     })


     usuarioDAO.eliminarUsuario(3, (result, err) => {
        if (err) {
            console.error('error al borrar de la base datos' + err);
        } else {
            console.log('usuario borrado');
        }
    })


    db.end((err) => {
        if (err) {
            console.log('error al desconectar la base de datos');
            return;
        }
        console.log('desconexion exitosa');
    })
})