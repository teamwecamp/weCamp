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


router.post('/', (req, res) => {
    console.log('this is in router post addItinerary', req.body);
    if (req.isAuthenticated()) {
        (async () => {
            const client = await pool.connect();
            try {
                await client.query('BEGIN');
    const program = req.body.camps;
    const kid = req.body.kids;
    const status = req.body.status;
    console.log('this is req.body', req.body);
    for(let info of program){
        const queryText = `INSERT INTO "child_itinerary" ("user_child_id", "dates_id", "status_id") 
                           VALUES ($1, $2, $3);`;
        await client.query(queryText, [kid, info, status]);               

    }
        await client.query('COMMIT');
        res.sendStatus(200);
            } catch (error) {
                console.log('Rollback', error);
                await client.query('ROLLBACK');
                throw error;
            } finally {
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


   



module.exports = router;