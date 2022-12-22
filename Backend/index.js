const dotenv = require('dotenv').config({path:'.env'})
const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 3004;
const cors = require('cors')

app.use(cors())
app.use(express.json())

const { routes } = require('./routes/index')

app.use('/',routes)


// app.get("/", (req, res) => {
//   res.send({ status: 200, response: "Hello Human" });
// });

app.listen(port, (err) => {
  if (err) {
    return console.log({ Error: err.message });
  }
  console.log(`server started at http://localhost:${port}`);
});
