
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Reload89!",
    database: "burgers_db"
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