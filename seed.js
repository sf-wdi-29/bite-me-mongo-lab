// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var foods_list =[
  {name: "Tiramisu", yumminess: "quite"},
  {name: "Green Eggs & Ham", yumminess: "sure"},
  {name: "aardvark", yumminess: "depending"},
  {name: "Foie Gras", yumminess: "omg"},
  {name: "Kale", yumminess: "meh"}
];

db.Food.remove({}, function(err, foods){

  db.Food.create(foods_list, function(err, foods){
    if (err) { return console.log(err) };
    console.log("created", foods.length, "foods")
    process.exit();
  })

});
