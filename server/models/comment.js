let mongoose = require("mongoose");

// create a model class
let commentSchema = mongoose.Schema(
  {
    threadId : String,
    content: String,
    userName: String,
    userId: String
  },
  {
    collection: "comment"
  }
);

module.exports = mongoose.model("comment", commentSchema);
