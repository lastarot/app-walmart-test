const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cookieParser());

app.use(require(`./app/routes/route`));

module.exports = app;