let mongoose = require("mongoose");

// create a model class
let threadSchema = mongoose.Schema(
  {
    title : String,
    content: String,
    userName: String,
    userId: String,
    replies: {
      type: Number,
      default: 0,
      trim: true,
      required: "reply is required"
    },
  },
  {
    collection: "thread"
  }
);

module.exports = mongoose.model("thread", threadSchema);
