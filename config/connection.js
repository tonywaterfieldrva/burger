
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bbd3f48bfef5b6",
    password: "43bee7a8",
    database: "heroku_c5e08eff384d466"
  });
}

connection.connect();
module.exports = connection;
// var mysql = require("mysql");

// connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Reload89!",
//     database: "burgers_db"
// });


// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id: " + connection.threadId);
// });

// module.exports = connection;