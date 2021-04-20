const express = require("express");
const controller = require("../controllers/controller");

function Router() {
  const router = express.Router();
  router.get("/search", controller);

  return router;
}

module.exports = Router();
