const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    // router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('this is inside router shared itinerary', req.params.id);
        (async () => {
            const client = await
                pool.connect();
            try {
                await client.query('BEGIN');
                const schedule = {};
                //child Id is itinerary to be viewed
                const childId = req.params.id;
                //grab user's name for display
                let queryText = `SELECT "child_profile"."name" AS "title", "child_profile"."id" FROM "child_profile"     
                                JOIN "user_child" ON "user_child"."child_id" = "child_profile"."id"
                                WHERE "user_child"."id" = $1`;
                const childName = await client.query(queryText, [childId]);
                console.log('childid', req.params.id);
                //grab the children of the user
                // queryText = `SELECT "child_profile"."id", "child_profile"."name" AS title 
	            //                 FROM "child_profile"
	            //                 JOIN "child_itinerary"
	            //                 ON "child_profile"."id"="child_itinerary"."user_child_id"
	            //                 WHERE "child_itinerary"."user_child_id"=$1;`
                // const children = await client.query(queryText, [childId]);
                console.log('childid - after select', req.params.id);
                //Selecting child_id, dates_id, status_id and status.
                queryText = `SELECT "child_profile"."id" AS "id", "child_profile"."name", "child_itinerary"."user_child_id",
                            "child_itinerary"."dates_id" AS "dates_id", "child_itinerary"."status_id" AS "status_id"
                            FROM "child_profile" JOIN "user_child" 
                            ON "child_profile"."id" = "user_child"."child_id"
                            JOIN "child_itinerary" ON "user_child"."id" = "child_itinerary"."user_child_id"
                            WHERE "child_itinerary"."user_child_id"=$1;`;

                const itineraryList = await client.query(queryText, [childId]);
                // takes the info we get from query above and put them in a list "itinerary"
                const itinerary = itineraryList.rows;

                console.log('itinerary list row', itinerary);
                //create empty array to push data we get above into "itineraryItem"
                let itineraryItem = [];
                //counter for ids in itinerary
                let id = 1;
                // loop through all the item in itinerary and create new variables for them
                for (let item of itinerary) {
                    let child = item.id;
                    let date = item.dates_id;
                    console.log('child', child);
                    console.log('date', date);
                    //selecting camp name & info based on dates_id received from above
                    //time and dates are in UNIX for timeline-calendar
                    queryText = `SELECT "program_dates"."program_id", "camp_program"."camp_id", "camp_program"."title", "camp"."Name", 
                                 EXTRACT(EPOCH from "program_dates"."start_date") * 1000 AS "start_date", 
                                 EXTRACT(EPOCH from "program_dates"."end_date") * 1000 AS "end_date", 
                                 EXTRACT(EPOCH from "program_dates"."end_time") * 1000 AS "end_time", 
                                 EXTRACT(EPOCH from "program_dates"."start_time") * 1000 AS "start_time"
                                 FROM "program_dates"
                                 JOIN "camp_program"
                                 ON "program_dates"."program_id"="camp_program"."id"
                                 JOIN "camp"
                                 ON "camp_program"."camp_id"="camp"."id"
                                 WHERE "program_dates"."id" = $1;`;
                    const secondPull = await client.query(queryText, [date]);
                    let result = secondPull.rows[0];
                    // add dates and time to get actual start time of program (in UNIX)
                    if (result.start_time !== null) {
                        result.start_time = result.start_date + result.start_time;
                    } else {
                        result.start_time = result.start_date;
                    }
                    if (result.end_time !== null) {
                        result.end_time = result.end_date + result.end_time;
                    } else {
                        result.end_time = result.end_date;
                    }
                    // add camp name to program title for display
                    result.title = `${result.title} - ${result.Name}`
                    result.id = id;
                    // increase id counter by 1
                    id++;
                    result.status = item.status
                    result.status_id = item.status_id
                    result.group = child;
                    // "result" gets pushed into empty array from above, subsequent items will be added                   
                    itineraryItem.push(result)
                }
                //add itinerary, children and user info to schedule as separate key/values
                schedule.itineraries = itineraryItem;
                schedule.children = childName.rows;
                schedule.userName = childName.rows[0];
                console.log(schedule);
                //end async-await
                await client.query('COMMIT');
                res.send(schedule);
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