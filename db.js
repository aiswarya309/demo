const mysql = require('mysql');
const util = require('util');

const config={
    user: "root",
    host:"localhost",
    password:"password",
    database:"company_webpage"
}

// module.exports = db;
function makeDb(config) {
  const conncetion = mysql.createConnection(config);
  return {
    query(sql, args) {
      return util.promisify(connection.query).call(conncetion, sql, args);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
}
module.exports = makeDb;
