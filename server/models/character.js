let mongoose = require("mongoose");

// create a model class
let characterSchema = mongoose.Schema(
  {
    userId : String,
    userName: String,
    affiliation: String,
    rank: String,
    bounty: String,
    group: String
  },
  {
    collection: "character"
  }
);

module.exports = mongoose.model("character", characterSchema);
