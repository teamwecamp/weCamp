const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


///This will contain the requests for the sharedAccess for the users
//to share their itineraries. 

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('this is inside router shared access');
    //selecting random camp info from camp table
    const queryText = `SELECT  "user"."full_name", "child_profile"."name"
FROM "user_child"
JOIN "sharing"
ON "user_child"."child_id"="sharing"."itinerary_id"
JOIN "user"
ON "sharing"."shared_to_id"="user"."id"
JOIN "child_profile"
ON "user_child"."child_id"="child_profile"."id"
WHERE "user_child"."user_id"=1;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('there is error in get camps router', error);
            res.sendStatus(500);
        })

});
    

/**
 * POST route template
 */
router.post('/:id', (req, res) => {

});

module.exports = router;