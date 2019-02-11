var mongoose = require("mongoose");
 
var TeamSchema = new mongoose.Schema({
    Name: String,
    Amount: Number,
    noOfPlayers: Number,
    playerNo: [
        {
          type: Number
        }
      ]
});
 
module.exports = mongoose.model("Team", TeamSchema);