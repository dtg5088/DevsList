const db = require("../models/card");

module.exports = {
  findAll: function(req, res) {
    db
      .find(req.query)
      .then(cardModel => res.json(cardModel))
      .catch(err => res.status(422).json(err));
  }
};