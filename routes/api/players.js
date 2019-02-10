const express = require('express');
const router = express.Router();

const Player = require('../../models/Players');
const Team = require('../../models/Teams');

// @route   GET api/players
// @desc    Get All Players
// @access  Public
router.get('/', (req,res) => {
    Player.find()
        .then(items => res.json(items))
});

router.put('/:id/:team', (req,res) => {
    Player.findByIdAndUpdate(req.params.id, {Team: req.params.team, price: req.body.price})
    .then(player => res.send(player))
})

module.exports = router;