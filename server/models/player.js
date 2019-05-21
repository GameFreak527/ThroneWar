let mongoose = require("mongoose");

// create a model class
let playerSchema = mongoose.Schema(
  {
    userID : String,
    userName: String,
    affiliation: String,
    rank: String,
    bounty: String
  },
  {
    collection: "player"
  }
);

module.exports = mongoose.model("player", playerSchema);
