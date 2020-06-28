const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// GET
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };

    res.render("index", hbsObject);
  });
});

// POST
router.post("/api/burgers", function (req, res) {
  const burgerName = req.body.burger_name;
  burger.insertOne("burger_name", burgerName, function (result) {
    res.json({ id: result.insertId });
  });
});

// PUT
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(req.params.id, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed,  then the ID doesn't exist, status = 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
