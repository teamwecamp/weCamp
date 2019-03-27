const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


///This will contain the requests for the sharedAccess for the users
//to share their itineraries. 

router.get('/userSharedWith', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.user.id;
        console.log('this is inside router shared access');
        //selecting 
        const queryText = `SELECT  "user"."full_name", "child_profile"."name", "sharing"."id", "user_child"."child_id"
                            FROM "user_child"
                            JOIN "sharing"
                            ON "user_child"."id"="sharing"."user_child_id"
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

router.get('/user/:email', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('in user email get', req.params);
        const queryText = `SELECT "id" FROM "user" WHERE "email" = $1;`;
        pool.query(queryText, [req.params.email]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            res.sendStatus(500);
            console.log(error);
        })
    } else {
        res.sendStatus(403);
    }
})

router.get('/sharedWithUser', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.user.id;
        console.log('this is inside router shared access');
        //selecting random camp info from camp table
        const queryText = `SELECT "child_profile"."name", "user"."full_name", "sharing"."id", "user_child"."child_id", "user_child"."id" AS "user_child_id"
                            FROM "sharing"
                            JOIN "user_child"
                            ON "sharing"."user_child_id"="user_child"."id"
                            JOIN "child_profile"
                            ON "child_profile"."id"="user_child"."child_id"
                            JOIN "user"
                            ON "user_child"."user_id"="user"."id"
                            WHERE "sharing"."shared_to_id"=$1;`;
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

router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('in delete router', req.params.id);
        const id = [req.params.id];
        const queryText = `DELETE FROM "sharing"
                    WHERE id=$1`
        pool.query(queryText, id)
            .then((response) => { res.sendStatus(200); })
            .catch((error) => {
                res.sendStatus(500)
            })
    } else {
        res.sendStatus(403);
    }
})


// add itinerary to shared_to 
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.body);
        const child_id = parseInt(req.body.child_id);
        const share_id = req.body.id;
        const queryText = `INSERT INTO "sharing" ("shared_to_id", "user_child_id") VALUES ($1, $2);`;
        pool.query(queryText, [share_id, child_id])
            .then(result => {
                res.sendStatus(201);
            }).catch(error => {
                console.log('error in sharedAccess POST', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;