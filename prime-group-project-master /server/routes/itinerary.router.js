const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // if (req.isAuthenticated()) {
        console.log('this is inside router get itinerary');
        (async () => {
            const client = await
                pool.connect();
            try {
                await client.query('BEGIN');

                //user.id is logged in user
                const user = req.user.id;
                //Selecting user_child, dates_id, status_id and status name.
                let queryText = `SELECT "user_child"."child_id", "child_itinerary"."dates_id", "child_itinerary"."status_id", "status"."status"
                                 FROM "user_child"
                                 JOIN "child_itinerary"
                                 ON "user_child"."child_id"="child_itinerary"."user_child_id"
                                 JOIN "status"
                                 ON "child_itinerary"."status_id"="status"."id"
                                 WHERE "user_child"."user_id"=$1`;
                const itineraryList = await client.query(queryText, [user]);
                // takes the info we get from query above and put them in a list
                const itinerary = itineraryList.rows;

                console.log('itinerary list row', itinerary);
                //create empty array to push data into
                let itineraryItem = [];
                for (let item of itinerary) {
                    let date = item.dates_id;
                    let kid = item.child_id;
                    let status = item.status;
                    console.log('date', date);
                    console.log('kid', kid);
                    console.log('status', status)

                    //selecting camp name & info based on id received from above
                    queryText = `SELECT "program_dates"."program_id", "camp_program"."camp_id", "camp_program"."title", "camp"."Name","start_date", "program_dates"."end_date"
                                 FROM "program_dates"
                                 JOIN "camp_program"
                                 ON "program_dates"."program_id"="camp_program"."id"
                                 JOIN "camp"
                                 ON "camp_program"."camp_id"="camp"."id"
                                 WHERE "program_dates"."id" = $1;`;
                    const secondPull = await client.query(queryText, [date]);
                    let result = secondPull.rows[0];
                    //create an empty object for data
                    let info = {};
                    //to push into object
                    info.date = result;
                    info.kid= kid;
                    // faves gets pshed into empty array from above
                    itineraryItem.push(info);
                }
                await client.query('COMMIT');
                res.send(itineraryItem);
            } catch (error) {
                console.log('Rollback', error);
                await client.query('ROLLBACK');
                throw error;
            }
            finally {
                client.release();
            }

        })().catch((error) => {
            console.log('CATCH', error);
            res.sendStatus(500);
        });
    // } else {
    //     res.sendStatus(403);
    // }

   
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;