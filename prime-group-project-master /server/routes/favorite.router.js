const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

///this SQL statment will need to change
// router.get('/', (req, res) => {
//     console.log('this is inside router get Favorite..');
//     const queryText = `SELECT * FROM "camp"`;
//     pool.query(queryText)
//     .then(result => {
//         res.send(result.rows);
//     }).catch(error => {
//         console.log('there is error in get favorite router', error);
//         res.sendStatus(500);
//     })

// })

router.get('/', (req, res) => {
    if(req.isAuthenticated()){
    console.log('this is inside router get Favorite..');
    (async () => {
        const client = await
            pool.connect();
        try {
            await client.query('BEGIN');
            
            const user = req.user.id;
            let queryText = `SELECT "favorites"."camp_id", "favorites"."user_kid_id"
                                FROM "favorites"
                                JOIN "user_child"
                                ON  "favorites"."user_kid_id"= "user_child"."child_id"
                                WHERE "user_child"."user_id" = $1`;
            const favoriteList = await client.query(queryText,[user]);
            const favorites = favoriteList.rows;
            console.log('favorite list row', favorites);
            let answer = [];
            for (let favorite of favorites) {
                queryText = `SELECT "camp"."name", "camp"."photo_url", "camp"."website" 
                                FROM "camp" 
                                WHERE "camp"."id" =$1`;
                const secondPull = await client.query(queryText,[favorite.camp_id]);
                let result = secondPull.rows[0];
                console.log(result);
                result.campId = favorite.campId;
                answer.push(result);
            }
            await client.query('COMMIT');
            res.send(answer);
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