const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'luisparra7',
    database: 'directorioEmpresa'
});

module.exports = connection;

    this.connection.connect((err) => {
      if (err) throw err;
      console.log('Conexión a MySQL establecida');
    });
  