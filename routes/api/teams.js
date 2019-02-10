const express = require('express');
const router = express.Router();

const Player = require('../../models/Players');
const Team = require('../../models/Teams');

router.get('/', (req,res) => {
    Team.find()
        .then(items => res.json(items))
});

router.put('/:teamid', (req,res) => {
    Team.findById(req.params.teamid)
    .then((team) => {
        team.Amount = team.Amount - req.body.price
        team.noOfPlayers += 1
        team.save();
        res.send(team)
    });
});

module.exports = router;