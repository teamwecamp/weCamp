const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET camp info for admin to edit
});


router.post('/', (req, res) => {
    // POST camps and programs as they are entered by camp admin on registration page
});

module.exports = router;