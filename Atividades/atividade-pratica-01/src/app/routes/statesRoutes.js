const express = require("express");
const routes = express.Router();

const StatesController = require("../controllers/statesController");

routes.get("/states", StatesController.index);
routes.get("/states/:id", StatesController.show);
routes.get("/states/name/:name", StatesController.showByName);
routes.post("/states", StatesController.store);
routes.put("/states/:id", StatesController.update);
routes.delete("/states/:id", StatesController.destroy);

module.exports = routes;
