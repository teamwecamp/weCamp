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
    const queryText = `SELECT "camp".*, "favorites"."user_kid_id", "favorites"."favorite" 
                       FROM "camp" LEFT JOIN "favorites" ON "camp"."id" = "favorites"."camp_id" 
                       WHERE "camp"."id" = $1 AND "favorites"."favorite" = true;`;
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
        const queryText = `SELECT "program_dates"."program_id", "camp_program"."camp_id", "camp_program"."type_id", "camp_program"."title", "camp_program"."cost", "program_dates"."start_date",
                           "program_dates"."end_date", "program_dates"."start_time", "program_dates"."end_time", "camp_type"."type"   
                            FROM "program_dates"
                            JOIN "camp_program"
                            ON "program_dates"."program_id"="camp_program"."camp_id"
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

module.exports = router;