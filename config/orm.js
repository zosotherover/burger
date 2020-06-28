const connection = require("./connection");

const orm = {
  selectAll: function () {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM burgers";

      connection.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  insertOne: function (burger, eaten) {
    return new Promise((resolve, reject) => {
      let query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";

      connection.query(query, [burger, eaten], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
  //sets burger devoured from false to true
  updateOne: function (id) {
    return new Promise((resolve, reject) => {
      let query = `SELECT id, burger_name, devoured FROM burgers WHERE id = ?; UPDATE burgers SET devoured = true WHERE id = ?`;

      connection.query(query, [id, id], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  },
};
module.exports = orm;
