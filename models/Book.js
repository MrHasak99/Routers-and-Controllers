const { model, Schema } = require("mongoose");

const BookSchema = new Schema({
  name: { type: String },
  author: { type: String },
  price: { type: Number },
});

module.exports = model("Book", BookSchema);
