const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//This will contain all the userprofile info for their profile page.
router.get('/user', (req, res) => {
    console.log('this is in gets user profile')
    if (req.isAuthenticated) {
        //user.id is logged in user
        const user = req.user.id;
        const queryText = `SELECT * FROM "user"
                       WHERE "user"."id" = $1;`;
        pool.query(queryText, [user])
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('there is error in get user router', error);
            })
    } else {
        res.sendStatus(403);
    }
});


router.get('/childInfo', (req, res) => {
    console.log('this is inside /childInfo');
    if (req.isAuthenticated) {
        const user = req.user.id;
        const queryText = `SELECT "user_child"."child_id", "child_profile"."DOB", "child_profile"."name", "child_profile"."gender_id"
                       FROM "child_profile"
                       JOIN "user_child"
                       ON "user_child"."child_id"="child_profile"."id"
                       JOIN "user"
                       ON "user"."id"="user_child"."user_id"
                       WHERE "user"."id"= $1;`;
        pool.query(queryText,[user])
            .then(result => {
                res.send(result.rows);
            }).catch(error => {
                console.log('there is error in get user router', error);
            })
    } else {
        res.sendStatus(403);
    }
})


router.get('/child', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('this is in gets child profile');
        (async () => {
            const client = await
                pool.connect();
            try {
                await client.query('BEGIN');
                // user 
                const user = req.user.id;
                let queryText = `SELECT "user_child"."user_id", "user_child"."child_id"
                                 FROM "user_child"
                                 JOIN "user"
                                 ON "user_child"."user_id"="user"."id"
                                 WHERE "user"."id" = $1;`;
                const profileList = await client.query(queryText, [user]);
                const profile = profileList.rows;
                console.log('profileList', profile);

                let profileItem = [];
                for (let item of profile) {
                    let parent = item.user_id;
                    let child = item.child_id;
                    // console.log('parent', parent);
                    // console.log('child', child);

                    queryText = `SELECT "user_child"."child_id", "child_profile"."DOB", "child_profile"."name", "child_profile"."gender_id"
                                 FROM "child_profile"
                                 JOIN "user_child"
                                 ON "user_child"."child_id"="child_profile"."id"
                                 JOIN "user"
                                 ON "user"."id"="user_child"."user_id"
                                 WHERE "user"."id"= $1;`;
                    const secondPull = await client.query(queryText, [parent]);
                    let result = secondPull.rows[0];
                    let info = {};
                    info.profile = result;
                    console.log('this is info.profile', info.profile)
                    info.child = child;
                    profileItem.push(info);
                }
                await client.query('COMMIT');
                res.send(profileItem);

            } catch (error) {
                console.log('ROLLBACK', error);
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


router.post('/', (req, res) => {
// add child to user profile
});

module.exports = router;