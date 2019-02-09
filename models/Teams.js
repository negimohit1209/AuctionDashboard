var mongoose = require("mongoose");
 
var TeamSchema = new mongoose.Schema({
    Name: String
});
 
module.exports = mongoose.model("Team", TeamSchema);