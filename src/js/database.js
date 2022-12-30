const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yaryna',
  password: 'yaryna.123',
  database: 'imbaza',
});

module.exports = connection;