const express = require("express");
const controller = require("../controllers/controller");

function Router() {
  const router = express.Router();
  router.post("/ruta1", controller);

  return router;
}

module.exports = Router();
