const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    type: [String],
  },
});

module.exports = mongoose.model("contact", contactSchema);
