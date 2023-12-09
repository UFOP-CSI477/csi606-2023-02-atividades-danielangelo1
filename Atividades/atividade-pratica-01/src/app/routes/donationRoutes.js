const express = require("express");
const router = express.Router();
const DonationController = require("../controllers/donationController");

router.get("/donations/", DonationController.index);
router.get("/donations/:id", DonationController.show);
router.get("/donations/person/:person_id", DonationController.showByPerson);
router.get("/donations/local/:local_id", DonationController.showByLocal);
router.post("/donations/", DonationController.store);
router.put("/donations/:id", DonationController.update);
router.delete("/donations/:id", DonationController.destroy);

module.exports = router;
