const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


///This will contain the requests for the sharedAccess for the users
//to share their itineraries. 

/**
 * GET route template
 */
router.get('/userSharedWith', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.user.id;
    console.log('this is inside router shared access');
    //selecting 
        const queryText = `SELECT  "user"."full_name", "child_profile"."name", "sharing"."id", "user_child"."child_id"
                            FROM "user_child"
                            JOIN "sharing"
                            ON "user_child"."child_id"="sharing"."itinerary_id"
                            JOIN "user"
                            ON "sharing"."shared_to_id"="user"."id"
                            JOIN "child_profile"
                            ON "user_child"."child_id"="child_profile"."id"
                            WHERE "user_child"."user_id"=$1;`;
    pool.query(queryText, [id])
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('there is error in get camps router', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }


});

router.get('/sharedWithUser', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.user.id;
        console.log('this is inside router shared access');
        //selecting random camp info from camp table
        const queryText = `SELECT "child_profile"."name", "user"."full_name", "sharing"."id", "user_child"."child_id"
                            FROM "sharing"
                            JOIN "child_profile"
                            ON "sharing"."itinerary_id"="child_profile"."id"
                            JOIN "user_child"
                            ON "child_profile"."id"="user_child"."child_id"
                            JOIN "user"
                            ON "user_child"."user_id"="user"."id"
                            JOIN  "child_itinerary"
                            ON "user_child"."child_id"="child_itinerary"."user_child_id"
                            WHERE "sharing"."shared_to_id"=1;`;
        pool.query(queryText, [id])
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('there is error in get camps router', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }

});

router.delete('/:id', (req,res)=> {
    console.log('in delete router', req.params.id);
    
    const id =[req.params.id];
    const queryText=`DELETE FROM "sharing"
                    WHERE id=$1`
        pool.query(queryText, id)
        .then((response)=> {res.sendStatus(200); })
        .catch((error)=> {
            res.sendStatus(500)
        })
})



    

/**
 * POST route template
 */
router.post('/:id', (req, res) => {

});

module.exports = router;