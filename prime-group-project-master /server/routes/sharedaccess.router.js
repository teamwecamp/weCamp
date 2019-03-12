const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


///This will contain the requests for the sharedAccess for the users
//to share their itineraries. 

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/:id', (req, res) => {

});

module.exports = router;