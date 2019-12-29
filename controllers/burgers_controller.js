var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbarsObj = {burgers: data};
        console.log(hdbarsObj);
        res.render("index", hdbarsObj);
    });
});

   router.post("/api/burgers", function(req, res) {
       burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], 
            function(result) {
                res.json({ id: result.insertId });
            } 
       );
   });
   router.put("/api/burgers/:id", function(req, req) {
       var condition = "id = " + req.params.id;
       console.log(condition);
       burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
            if ((result, changedRows === 0)) {
                return res.status(404).end();
            }
            else {
                return res.status(200).end();
            }
       });
   });
//    router.deleteOne(condition, function(req, res) {
//        var condition = "id = " + req.params.id;
//        console.log("condition: ", condition);
//        burger.deleteOne(condition, function(result) {
//         if ((result, changedRows === 0)) {
//             return res.status(404).end();
//         }
//         else {
//             return res.status(200).end();
//         }
//       });
//    });

module.exports = router;