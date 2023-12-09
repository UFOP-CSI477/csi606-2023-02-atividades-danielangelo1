const express = require("express");
const routes = express.Router();

const PersonController = require("./app/controller/personController");

routes.get("/persons", PersonController.index);
routes.get("/persons/:id", PersonController.show);
routes.get("/persons/name/:name", PersonController.showByName);
routes.post("/persons", PersonController.store);
routes.put("/persons/:id", PersonController.update);
routes.delete("/persons/:id", PersonController.destroy);

module.exports = routes;
