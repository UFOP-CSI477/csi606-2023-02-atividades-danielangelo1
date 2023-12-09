const express = require("express");
const router = express.Router();
const DonationController = require("../controllers/donationController");

router.get("/", DonationController.index);
router.get("/:id", DonationController.show);
router.get("/person/:person_id", DonationController.showByPerson);
router.get("/local/:local_id", DonationController.showByLocal);
router.post("/", DonationController.store);
router.put("/:id", DonationController.update);
router.delete("/:id", DonationController.destroy);

module.exports = router;
