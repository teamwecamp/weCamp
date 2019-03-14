const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//This is for Viewing the camps.
router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('In /viewcamps GET');
        const id = req.params.id;
        const queryText = `SELECT * FROM "camp" WHERE "id" = $1;`;
        pool.query(queryText, [id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            res.sendStatus(500);
            console.log(error);
        })
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;