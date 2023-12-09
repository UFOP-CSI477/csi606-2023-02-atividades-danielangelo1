const express = require("express");
const routes = express.Router();

const personRoutes = require("./app/routes/personRoutes");
const donationRoutes = require("./app/routes/donationRoutes");

routes.use(personRoutes);
routes.use(donationRoutes);

module.exports = routes;
