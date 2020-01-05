var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    console.log("selectAll from burgewr_controller.js: ", req + " " + res);

    burger.selectAll(function(data) {
        var hdbarsObj = {burgers: data};
        console.log(hdbarsObj);
        res.render("index", hdbarsObj);
    });
});

   router.post("/api/burgers/", function(req, res) {
    console.log("insertOneselectAll from burgewr_controller.js: ", req + " " + res);
       burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], 
            function(result) {
                res.json({ id: result.insertId });
            } 
       );
   });
   router.put("/api/burgers/:id", function(req, res) {
    console.log("updateOne from burgewr_controller.js: ", req + " " + res);
 
    var condition = "id = " + req.params.id;
       console.log(condition);
       burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
       });
   });
   router.delete("/api/burgers/:id", function(req, res) {
       var condition = "id = " + req.params.id;
       console.log("condition: ", condition);
       burger.deleteOne(condition, function(result) {

      });
   });
module.exports = router;