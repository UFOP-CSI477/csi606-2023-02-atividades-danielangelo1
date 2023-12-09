const express = require("express");
const routes = express.Router();

const personRoutes = require("./app/routes/personRoutes");
const donationRoutes = require("./app/routes/donationRoutes");
const placesDonationRoutes = require("./app/routes/placesDonationRoutes");

routes.use(personRoutes);
routes.use(donationRoutes);
routes.use(placesDonationRoutes);

module.exports = routes;
