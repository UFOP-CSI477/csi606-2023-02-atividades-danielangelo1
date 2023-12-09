const express = require("express");
const routes = express.Router();

const PlacesDonationController = require("../controllers/placesDonationController");

routes.get("/placesDonation", PlacesDonationController.index);
routes.get("/placesDonation/:id", PlacesDonationController.show);
routes.get("/placesDonation/name/:name", PlacesDonationController.showByName);
routes.post("/placesDonation", PlacesDonationController.store);
routes.put("/placesDonation/:id", PlacesDonationController.update);
routes.delete("/placesDonation/:id", PlacesDonationController.destroy);

module.exports = routes;
