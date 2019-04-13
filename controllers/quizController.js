const db = require("../models/quiz");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    db
      .create(req.body)
      .then(quizModel => res.json(quizModel))
      .catch(err => res.status(422).json(err));
  }
};