const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '1234',
    database: 'directorioEmpresa'
});

module.exports = connection;

    this.connection.connect((err) => {
      if (err) throw err;
      console.log('Conexión a MySQL establecida');
    });
  