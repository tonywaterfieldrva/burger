var connection = require("../config/connection.js");


function translateSql(obj) { 
    var arr = [];
    for (var key in obj) { 
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
       }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";
        console.log("selectAll from orm.js: ", dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) {
                throw err;
            }

            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        console.log("I1 table: ", table);
        console.log("I1 cols: ", cols);
        console.log("I1 vals: ", vals);
        console.log("I1 cb: ", cb);
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES ('" + vals[0] + "' , " + vals[1] + ")";
        console.log("insertOne from orm.js: ", dbQuery);

        connection.query(dbQuery, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log("updateOne from orm.js: ", dbQuery);

        connection.query(dbQuery, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        }); 
    },
    deleteOne: function(table, condition, cb) {
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log("deleteOne from orm.js: ", dbQuery);

        connection.query(dbQuery, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        }); 
    }
};
module.exports = orm;