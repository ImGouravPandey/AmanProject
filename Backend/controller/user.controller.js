//
const { connectDb } = require("../model/dbConnect");
const uuid = require("uuid");

let addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // hash
    const userData = {
      id: uuid.v4(),
      name,
      email,
      password,
      role: "admin",
    };
    const sqlQuery = "INSERT INTO user SET ?";
    await connectDb.query(sqlQuery, userData, async (err, res1) => {
      if (err) {
        return res.json({ Error: err.sqlMessage });
      }
      res.json({
        status: 200,
        response: "User added Successfully",
        result: res1,
      });
    });
  } catch (err) {
    res.json({ status: 400, response: err.message });
  }
};

let allUser = async (req, res) => {
  try {
    let sqlQuery = `SELECT id,name,email,role FROM user`;
    connectDb.query(sqlQuery, (err, result) => {
      if (err) {
        return res.json({ status: 400, response: err.sqlMessage });
      }
      res.json({
        status: 200,
        response: "All User",
        user: result,
      });
    });
  } catch (err) {
    res.json({ status: 400, response: err.message });
  }
};

module.exports = { allUser, addUser };
