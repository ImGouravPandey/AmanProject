const mysql = require("mysql");

const connectDb = mysql.createConnection({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password:  process.env.DB_PASS,
  database:  process.env.DB_DATABASE,
});

connectDb.connect((err) => {
  if (err) {
    return console.log({ Error: err.sqlMessage });
  }
  console.log("Database Connected")
});

module.exports = { connectDb };
