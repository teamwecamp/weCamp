const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/status', (req, res) => {
    console.log('In /status');

    const queryText = `SELECT * FROM "status";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    })

});


//This is for Viewing the camps. User does not need to be logged in.
router.get('/:id', (req, res) => {
    console.log('In /viewcamps GET');
    const id = req.params.id;
    const queryText = `SELECT * FROM "camp" WHERE "id" = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    })
});


// this gets the camp program and information of the programs. User does not need to be logged in.
router.get('/viewProgram/:id', (req, res) => {
    console.log('this is inside of viewProgram/:id');

    const id = req.params.id
    // const user = req.user.id;
    const queryText = `SELECT "program_dates"."id" as "program_id", "camp_program"."camp_id", "camp_program"."type_id", "camp_program"."title", "camp_program"."cost", "program_dates"."start_date",
                           "program_dates"."end_date", "program_dates"."start_time", "program_dates"."end_time", "camp_type"."type"   
                            FROM "program_dates"
                            JOIN "camp_program"
                            ON "program_dates"."program_id"="camp_program"."id"
                            JOIN "camp_type"
                            ON "camp_program"."type_id"="camp_type"."id"
                            JOIN "camp"
                            ON "camp_program"."camp_id"="camp"."id"
                            WHERE "camp"."id" = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
        console.log(error);
    })
});



/**
 * POST route template
 */

router.post('/', (req, res) => {
    console.log('this is in router post addItinerary', req.body);
    const addItinerary = req.body
    //     (async () => {
    //         const client = await
    //             pool.connect();
    //         try {
    // for (itinerary of addItinerary) {


    // const queryValues = [
    // let child = itinerary.kids;
    // // let dates = itinerary.true;
    // let status = itinerary.status
    // console.log(child)
    // console.log(true)
    // console.log(status)
    // ];

    const queryText = `INSERT INTO "child_itinerary" ("user_child_id", dates_id, "status_id") 
                       VALUES ($1, $2, $3);`;
    // for(itinerary of addItinerary) {


    // const queryValues = [
    //     let child = itinerary.kids;
    //     // let dates = itinerary.true;
    //     let status =itinerary.status
    //     console.log('this is child', child)
    //     console.log(true)
    //     console.log('this is status',status)
    // ];
    //  }
    // queryValues
    pool.query(queryText, [addItinerary.kids, addItinerary.dates, addItinerary.status])
        .then(response => {
            res.sendStatus(210);
        }).catch(error => {
            console.log('there is error in post itinerary', error);
            res.sendStatus(500);
        });




});

module.exports = router;