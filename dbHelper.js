// Initialization
var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecole'
});

// Query method
mysqlJson.query("SELECT * FROM etudiant", function(err, response) {
    if (err) throw err;
    console.log(response);
});