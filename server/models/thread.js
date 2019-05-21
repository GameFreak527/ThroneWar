let mongoose = require("mongoose");

// create a model class
let threadSchema = mongoose.Schema(
  {
    title : String,
    content: String,
    userName: String,
    userId: String,
    relationship: String
  },
  {
    collection: "thread"
  }
);

module.exports = mongoose.model("thread", threadSchema);
