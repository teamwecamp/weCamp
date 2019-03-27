const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('this is inside router get Favorite..');
        (async () => {
            const client = await
                pool.connect();
            try {
                await client.query('BEGIN');
                //user.id is logged in user
                const user = req.user.id;
                console.log(user);
                //selecting favorite camp id and child name - joinign favorites to user child and child 
                //profile to user table
                let queryText = `SELECT "favorites"."camp_id", "child_profile"."name", "favorites"."id"
                    FROM "favorites" 
                    JOIN "user_child" 
                    ON "favorites"."user_child_id"="user_child"."id"
                    JOIN "child_profile"
                    ON "user_child"."child_id"="child_profile"."id"
                    WHERE "user_child"."user_id"= $1 AND "favorites"."favorite" = TRUE;`;
                const favoriteList = await client.query(queryText, [user]);
                //turns favorite into an array
                const favorites = favoriteList.rows;
                console.log('favoritelist', favorites);
                console.log('favorite list row', favorites);
                //create empty array to push data into
                let favCamps = [];
                for (let favorite of favorites) {
                    let camp = favorite.camp_id;
                    let kid = favorite.name;
                    let favoriteId = favorite.id;
                    console.log('kid', kid);
                    console.log('camp', camp);
                    //selecting camp name & info based on id received from above
                    queryText = `SELECT "camp"."name", "camp"."photo_url", "camp"."website"
                                FROM "camp" 
                                WHERE "camp"."id" =$1`;
                    const secondPull = await client.query(queryText, [favorite.camp_id]);
                    let result = secondPull.rows[0];
                    //create an empty object for data
                    let faves = {};
                    //to push into object
                    faves.camp = result;
                    faves.camp.id = camp;
                    faves.kid = kid;
                    faves.faveId = favoriteId;
                    // faves gets pshed into empty array from above
                    favCamps.push(faves);
                }
                await client.query('COMMIT');
                res.send(favCamps);
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


//remove favorite in DB by marking as false
router.put('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params.id;
        console.log(id);
        const queryText = `UPDATE "favorites" SET "favorite" = FALSE WHERE "id" = $1;`;
        pool.query(queryText, [id])
            .then(result => {
                res.sendStatus(200);
            }).catch(error => {
                console.log('there is error in PUT favorites router', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
})

// get user's children for multiple components
router.get('/userChild', (req, res) => {
    if (req.isAuthenticated()) {
        const user = req.user.id;
        const queryText = `SELECT "user_child"."id", "child_profile"."name" FROM "user_child" 
                    JOIN "child_profile" ON "user_child"."child_id" = "child_profile"."id"
                    WHERE "user_child"."user_id" = $1;`;
        pool.query(queryText, [user])
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('there is error in GET userChild router', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

// add favorite to user's child
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        const favorite = req.body;
        console.log(favorite);
        const queryText = `INSERT INTO "favorites" ("user_child_id", "camp_id") VALUES ($1, $2)`;
        pool.query(queryText, [parseInt(favorite.child), favorite.camp])
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('there is error in GET userChild router', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})


module.exports = router;