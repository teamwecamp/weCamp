const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//This will contain all the userprofile info for their profile page.

/**
 * GET route template
 */
router.get('/user', (req, res) => {
    console.log('this is in gets user profile')
    if(req.isAuthenticated){
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



    }
    
    
});


router.get('/child', (req, res)=> {
    console.log('this is in gets child profile')

})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;