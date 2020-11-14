var mysql = require('mysql');
var conn = mysql.createConnection({
    debug: false,
    host: '127.0.0.1',
    port: 3306,
    database: 'yourdb_name',
    user: 'username',
    password: 'YOUR_PASSCODE'// // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;