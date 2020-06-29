const orm = require("../config/orm");

// Select ALL
const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Insert One
  insertOne: function (column, value, cb) {
    orm.insertOne("burgers", column, value, function (res) {
      cb(res);
    });
  },
  //Update One
  updateOne: function (id, cb) {
    orm.updateOne("burgers", "devoured", true, id, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
