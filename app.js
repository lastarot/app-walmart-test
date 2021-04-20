const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnection } = require("./db/config");
require("dotenv").config();

dbConnection();
app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, channel, build-number"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST");
  next();
});

app.use(require(`./app/routes/route`));

module.exports = app;
