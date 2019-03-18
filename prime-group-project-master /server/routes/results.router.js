const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


///This is the results router. Not sure if it is needed but will
// be included as it was on the Google Sheet.

/**
 * GET route template
 */
//DEV
router.get('/', (req, res) => {
    const queryText = `SELECT  * FROM "camp"`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('there is error in GET results router', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;