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

module.exports = router;