const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// select camps most recently added to display on landing
router.get('/recentCamps', (req, res) => {
    console.log('this is inside router get camps.');
    const queryText = `SELECT "camp"."name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region"
                        FROM "camp" JOIN "regions" ON "camp"."region_id" = "regions"."id" 
                        ORDER BY "date_added"
                        DESC
                        LIMIT 4;`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is error in get camps router', error);
        res.sendStatus(500);
    })
})

// select camps marked as sponsored to display on landing
router.get('/sponsoredCamps', (req, res) => {
    console.log('this is inside router get camps.');
    const queryText = `SELECT "camp"."name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region"
                        FROM "camp" JOIN "regions" ON "camp"."region_id" = "regions"."id" 
                        WHERE "sponsored" = true
                        ORDER BY RANDOM()
                        LIMIT 4;`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('there is error in get camps router', error);
        res.sendStatus(500);
    })

})


module.exports = router;