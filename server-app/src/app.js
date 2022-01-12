const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const {
  username,
  password,
  dialect,
  port,
  host,
  db,
} = require("./config/index");
const Database = require("./database");

const app = express();
const PORT = process.env.PORT || 5050;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS }));
app.use("/", routes);

const database = new Database(username, password, host, port, dialect, db);
database.connect();

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`Server is listen on port : ${PORT}`);
});
