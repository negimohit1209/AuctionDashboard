const express = require('express');
const router = express.Router();

const Player = require('../../models/Players');
const Team = require('../../models/Teams');

router.get('/', (req,res) => {
    Team.find()
        .then(items => res.json(items))
});

module.exports = router;