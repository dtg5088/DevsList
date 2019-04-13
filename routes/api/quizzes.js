const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"

router.route("/")
  .post((req, res) => {
    quizController.create(req, res)
});

module.exports = router;