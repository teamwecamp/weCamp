const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    if(req.isAuthenticated()){
    console.log('this is inside router get Favorite..');
    (async () => {
        const client = await
            pool.connect();
        try {
            await client.query('BEGIN');
            
            //user.id is logged in user
            const user = req.user.id;
            //selecting favorite camp id and child name - joinign favorites to user child and child 
            //porfile to user table
            let queryText = `SELECT "favorites"."camp_id", "child_profile"."name"
                    FROM "favorites" 
                    JOIN "user_child" 
                    ON "favorites"."user_kid_id"="user_child"."child_id"
                    JOIN "child_profile"
                    ON "user_child"."child_id"="child_profile"."id"
                    WHERE "user_child"."user_id"= $1`;
            const favoriteList = await client.query(queryText,[user]);
            //turns favorite into an array
            const favorites = favoriteList.rows;
            
            console.log('favoritelistr', favorites);
            
            console.log('favorite list row', favorites);
            //create empty array to push data into
            let favCamps =[];
            for (let favorite of favorites) {
                let camp = favorite.camp_id;
                let kid = favorite.name;
                console.log('kid', kid);
                console.log('camp', camp);
                
                //selecting camp name & info based on id received from above
                queryText = `SELECT "camp"."Name", "camp"."photo_url", "camp"."website"
                                FROM "camp" 
                                WHERE "camp"."id" =$1`;
                const secondPull = await client.query(queryText,[favorite.camp_id]);
                let result = secondPull.rows[0];
                //create an empty object for data
                let faves = {};
                //to push into object
                faves.camp= result;
                faves.kid=kid;
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
    }else{
        res.sendStatus(403);
    }



});




module.exports = router;