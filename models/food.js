var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  yumminess: {
    type: String,
    required: true
  },
  ingredients: [{
    // Food REFERENCES ingredients
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

var Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
