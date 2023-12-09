const express = require("express");
const router = express.Router();

const cityController = require("../controllers/cityController");

router.get("/city/", cityController.index);
router.get("/city/:id", cityController.show);
router.get("/city/name/:name", cityController.showByName);
router.post("/city/", cityController.store);
router.put("/city/:id", cityController.update);
router.delete("/city/:id", cityController.destroy);

module.exports = router;
