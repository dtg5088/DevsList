const router = require("express").Router();
const cardController = require("../../controllers/cardController");

router.route("/")
  .get((req, res) => {
  cardController.findAll(req, res)
});

module.exports = router;