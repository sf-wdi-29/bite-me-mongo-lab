var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  yumminess: {
    type: String,
    required: true
  }
})

var Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
