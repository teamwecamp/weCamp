const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all the camps that will be display onto landing page
router.get('/', (req, res) => {
    console.log('this is inside router get camps.');
    const queryText = `SELECT * FROM "camp"`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is error in get camps router', error);
        res.sendStatus(500);
    })

})



module.exports = router;