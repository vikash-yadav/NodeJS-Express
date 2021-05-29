const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "bba182b92551dd",
  password: "3d36910b",
  database: "heroku_b091cb5d3bb9c73",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;        /**To use through out my project.*/