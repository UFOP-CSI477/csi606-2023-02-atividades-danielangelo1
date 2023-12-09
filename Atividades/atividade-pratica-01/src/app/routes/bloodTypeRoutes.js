const express = require("express");
const router = express.Router();

const bloodTypeController = require("../controllers/bloodTypeController");

router.get("/bloodType/", bloodTypeController.index);
router.get("/bloodType/:id", bloodTypeController.show);
router.get("/bloodType/type/:type", bloodTypeController.showByType);
router.post("/bloodType/", bloodTypeController.store);
router.put("/bloodType/:id", bloodTypeController.update);
router.delete("/bloodType/:id", bloodTypeController.destroy);

module.exports = router;
