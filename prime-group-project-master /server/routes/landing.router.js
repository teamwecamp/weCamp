const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/recentCamps', (req, res) => {
    console.log('this is inside router get camps.');
    //selecting random camp info from camp table
    const queryText = `SELECT "camp"."Name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region"
                        FROM "camp" JOIN "regions" ON "camp"."region_id" = "regions"."id" 
                        ORDER BY "date_added"
                        DESC
                        LIMIT 4;`;
    pool.query(queryText)
    .then(result => {
        console.log(result.rows);
        
        res.send(result.rows);
    }).catch(error => {
        console.log('there is error in get camps router', error);
        res.sendStatus(500);
    })
})


router.get('/sponsoredCamps', (req, res) => {
    console.log('this is inside router get camps.');
    const queryText = `SELECT "camp"."Name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region"
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