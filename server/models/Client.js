const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    // index: true,
    // unique: true,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
