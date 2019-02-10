// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //Create Schema
// const PlayerSchema = new Schema({
//     Timestamp:{
//         type: String,
//     },
//     Name: {
//         type: String,
//     },
//     Photo: {
//         type: String
//     },
//     Year: {
//         type: String,
//     },
//     Department: {
//         type: String
//     },
//     Hostel:{
//         type: String
//     },
//     Position:{
//         type: String
//     },
//     ContactNumber: {
//         type: String
//     },
//     WhatsappNumber:{
//         type: String
//     },
//     Availability: {
//         type: String
//     },
//     Number:{
//         type: Number
//     }
// });

// module.exports = mongoose.model('Players', PlayerSchema);

var mongoose = require("mongoose");
 
var PlayerSchema = new mongoose.Schema({
    Timestamp: String,
    Name: String,
   Photo: String,
   Year: String,
   Department: String,
   Hostel: String,
   Position: String,
   ContactNumber: String,
   WhatsappNumber: String,
   Availability: String,
   Number: Number,
   Team: String
});
 
module.exports = mongoose.model("Player", PlayerSchema);