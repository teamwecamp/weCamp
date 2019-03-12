const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//Below will be the GET and POST from our search.
/**
 * GET route template
 */
//This will get all the dropdown information from the database to
//populate the search dropdowns.
router.get("/dropdown", (req, res) => {
  let dropDown = {};
  console.log("in get route for dropdown", dropDown);
  (async () => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      let queryText = 'SELECT * FROM "gender";';
      let dropDownResult = await client.query(queryText);
      //This will add the results of the query to the dropdown Object.
      dropDown = { gender: dropDownResult.rows };

      //Starting Camp Type query 
      queryText ='SELECT * FROM "camp_type";';
      dropDownResult = await client.query(queryText);
      dropDown = { campType: dropDownResult.rows };

     //Starting Activity Category query
      queryText ='SELECT * FROM "activity_category";';
      dropDownResult = await client.query(queryText);
      dropDown = { activityCatergory: dropDownResult.rows };
      
      //Starting Activity Specific Type query
      queryText ='SELECT * FROM "activities";';
      dropDownResult = await client.query(queryText);
      dropDown = { activities: dropDownResult.rows };

      //Starting Select State query
      queryText ='SELECT * FROM "states";';
      dropDownResult = await client.query(queryText);
      dropDown = { states: dropDownResult.rows };

      //Starting State Region query 
      queryText ='SELECT * FROM "regions";';
      dropDownResult = await client.query(queryText);
      dropDown = { regions: dropDownResult.rows };
    
      //end of query statements

      await client.query("COMMIT");
      console.log(dropDown);
      res.send(dropDown);
    } catch (e) {
      console.log("ROLLBACK", e);
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  })().catch(error => {
    console.log("CATCH", error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
