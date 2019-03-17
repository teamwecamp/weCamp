const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all the camps that will be display onto landing page
//**DO NOT BELIEVE THIS IS NEEDED */
// router.get('/', (req, res) => {
//     //selecting 5 most recently added camps based on date added
//     console.log('this is inside router get camps.');
//     const queryText = `SELECT "camp"."Name", "camp"."photo_url", "camp"."website"
//                         FROM "camp"
//                         ORDER BY "date_added"
//                         ASC
//                         LIMIT 5;`;
//     pool.query(queryText)
//     .then(result => {
//         res.send(result.rows);
//     }).catch(error => {
//         console.log('there is error in get camps router', error);
//         res.sendStatus(500);
//     })

// })

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