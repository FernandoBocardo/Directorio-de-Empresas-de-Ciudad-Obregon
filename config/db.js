const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '1234',
    database: 'directorioempresa'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión a MySQL establecida');
});

module.exports = connection;
  