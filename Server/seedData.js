const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const players = require('./playersData');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBCzKH1vx22dZkzzidwVztjJiCYLOV9vS8",
    authDomain: "auction-dashboard.firebaseapp.com",
    projectId: "auction-dashboard"
  });
  
var db = firebase.firestore();
var number = 0;

let teamList = [{name : 'ABYSS XI', captainNumber: '112'},
{name : 'Lancer', captainNumber: '4'},
{name : 'Enigma', captainNumber: '102'},
{name : '21 United', captainNumber: '27'},
{name : 'Raptors', captainNumber: '20'},
{name : 'Bristol Vipers', captainNumber: '1'}];

const seedData = async () => {
    await players.forEach(function(obj) {
        ++number;
        var id = number;
        db.collection("players").doc(id.toString()).set({
            timestamp: obj.Timestamp,
                name: obj.Name,
                email: obj.Email,
                photo: getImageId(obj['Upload recent photo.']),
                year: obj.Year,
                department: obj.Department,
                position: obj['Preferred position'],
                hostel: obj['Hall/Hostel/Day-scholar'],
                whatsAppNumber: obj['WhatsApp Number'],
                contactNumber: obj['Contact Number'],
                availability: obj['Availability']
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });
    await teamList.forEach(function(obj) {
        db.collection("teams").doc(obj.name).set({
            amount: 10000,
            noOfPlayers: 0
        }).then(function(docRef) {
            let captain = obj.captainNumber;
            db.collection('players').doc(captain.toString()).get().then(doc => {
                let player = {...doc.data(), number: doc.id};
                db.collection('teams').doc(obj.name).collection('players').doc(captain).set({
                    amount: 0, photo: player.photo, name: player.name, whatsAppNumber: player.whatsAppNumber, hostel: player.hostel, position: player.position
                }).then(() => {
                    db.collection('players').doc(captain.toString()).update({
                        amount: 0,
                        teamName: obj.name
                    }).then(() => {
                        db.collection('teams').doc(obj.name).update({
                            captainImage: player.photo,
                            noOfPlayers: 1
                        })
                    })
                })
            })
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });
}
const getImageId = (imageUrl) => {
    let array = imageUrl.split('id=');
    return array[1];
} 
seedData();




