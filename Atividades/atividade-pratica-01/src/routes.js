const express = require("express");
const routes = express.Router();

const personRoutes = require("./app/routes/personRoutes");
const donationRoutes = require("./app/routes/donationRoutes");
const placesDonationRoutes = require("./app/routes/placesDonationRoutes");
const statesRoutes = require("./app/routes/statesRoutes");
const cityRoutes = require("./app/routes/cityRoutes");

routes.use(personRoutes);
routes.use(donationRoutes);
routes.use(placesDonationRoutes);
routes.use(statesRoutes);
routes.use(cityRoutes);

module.exports = routes;
