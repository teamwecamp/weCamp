const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

///this SQL statment will need to change
router.get('/', (req, res) => {
    console.log('this is inside router get Favorite..');
    const queryText = `SELECT * FROM "camp"`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is error in get favorite router', error);
        res.sendStatus(500);
    })

})


module.exports = router;