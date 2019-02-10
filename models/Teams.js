var mongoose = require("mongoose");
 
var TeamSchema = new mongoose.Schema({
    Name: String,
    Amount: Number,
    noOfPlayers: Number
});
 
module.exports = mongoose.model("Team", TeamSchema);