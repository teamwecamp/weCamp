const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

//Below will be the GET and POST from our search.
/**
 * GET route template
 */
//This will get all the dropdown information from the database to
//populate the search dropdowns.
router.get('/dropdown', (req, res) => {
  let dropDown = {};
  console.log("in get route for dropdown", dropDown);
  (async () => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      let queryText = 'SELECT * FROM "gender";';
      let dropDownResult = await client.query(queryText);
      //This will add the results of the query to the dropdown Object.
      dropDown.gender = dropDownResult.rows;

      //Starting Camp Type query 
      queryText = 'SELECT * FROM "camp_type";';
      dropDownResult = await client.query(queryText);
      dropDown.campType = dropDownResult.rows;

      //Starting Activity Category query
      queryText = 'SELECT * FROM "activity_category";';
      dropDownResult = await client.query(queryText);
      dropDown.activityCategory = dropDownResult.rows;
      //change category
      //Starting Activity Specific Type query
      queryText = 'SELECT * FROM "activities";';
      dropDownResult = await client.query(queryText);
      dropDown.activities = dropDownResult.rows;

      //Starting Select State query
      queryText = 'SELECT * FROM "states";';
      dropDownResult = await client.query(queryText);
      dropDown.states = dropDownResult.rows;

      //Starting State Region query 
      queryText = 'SELECT * FROM "regions";';
      dropDownResult = await client.query(queryText);
      dropDown.regions = dropDownResult.rows;


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

router.get('/searchresult', (req, res) => {
  // req.query is what we are receiving from the client.
  console.log('this is in /searchresult', req.query);

  //reassigning req.query to search
  //added values for the query search
  
  let search = req.query;

  //This function will set search.religion to a boolean to match the database
  function setReligion () {
    if(search.religion === 'preferred'){
      search.religion = true;
    }else{
      search.religion = false;
    }
  
  }
  //This function will set search.accessiblity to a boolean to match the database
  function setAccessibility(){
    if(search.accessibility === 'preferred'){
      search.accessibility = true;
    }else{
      search.accessibility = false;
    }

  }

setAccessibility();
setReligion();
  
// WHERE "camp_program"."age_min" >= $1
// AND "camp_program"."age_max" <= $2
// AND "gender"."gender" = $3
// AND "camp"."religion" = $4
// AND "camp_type"."type" = $5
// AND "activity_category"."category" = $6
// AND "activities"."activity" = $7
// AND "camp"."cost_min" >= $8
// AND "camp"."cost_max" <= $9
// AND "camp"."disabled_friendly" = $10
// AND "regions"."region"= $11
// AND "states"."state"= $12
// AND "start_date" >= $13
// AND "program_dates"."end_date" <= $14;`;

  let i = 1;

  console.log(search);
  let values = [];

  values.push(Number(search.minAge)); // $1
  i += 1;
  values.push(Number(search.maxAge)); // $2
  i += 1;

  values.push(parseInt(search.gender)); // $3
  i += 1;
  values.push(search.religion); // $4
  i += 1;

  let primaryFocus = '';
  if(search.activityCategory > 0) {
    // push the value and increment i
    values.push(parseInt(search.activityCategory)); //$5
    
    // include the search
    primaryFocus = `AND \$${i} IN (
      SELECT "activity_category"."id" FROM "camp" as "c"
      JOIN "camps_activities"
      ON "camp"."id"="camps_activities"."camp_id"
      JOIN "activities"
      ON "activities"."id"="camps_activities"."activity_id"
      JOIN "activity_category"
      ON "activities"."category_id"="activity_category"."id"
      WHERE "c"."id" = "camp"."id"
    )`;
    i += 1;
  } else {
    // do nothing, leave out the search query and don't increment i
  }
  console.log(i);

  // let values = [
  //   Number(search.minAge),
  //   Number(search.maxAge),
  //   search.gender,
  //   search.religion,
  //   search.type,
  //   search.activityCategory,
  //   search.activityType,
  //   search.minCost,
  //   search.maxCost,
  //   search.accessibility,
  //   search.region,
  //   search.state,
  //   search.startDate,
  //   search.endDate,
  // ];
  console.log('This is after conversion',values);
  // const queryText = `SELECT DISTINCT "camp"."Name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region", "gender"."gender", "camp_type"."type", "program_dates"."start_date", "program_dates"."end_date", "camp"."cost_min", "camp"."cost_max", "activity_category"."category"
  //                    FROM "camp" 
  //                    JOIN "regions" 
  //                    ON  "camp"."region_id" = "regions"."id"
  //                    JOIN "camps_activities"
  //                    ON "camp"."id"="camps_activities"."camp_id"
  //                    JOIN "activities"
  //                    ON "activities"."id"="camps_activities"."activity_id"
  //                    JOIN "activity_category"
  //                    ON "activities"."category_id"="activity_category"."id"
  //                    JOIN "camp_program"
  //                    ON "camp"."id"="camp_program"."camp_id"
  //                    JOIN "gender"
  //                    ON "camp_program"."gender_id"="gender"."id"
  //                    JOIN "camp_type"
  //                    ON "camp_program"."type_id"="camp_type"."id"
  //                    JOIN "program_dates"
  //                    ON "camp_program"."id"="program_dates"."program_id"
  //                    WHERE "camp_type"."id" =$1;`;

// const queryText =`SELECT DISTINCT "camp"."Name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region", "gender"."gender", "camp_type"."type", 
// "program_dates"."start_date" AS "start_date", 
// "program_dates"."end_date" AS "end_date",
//  "camp"."cost_min", "camp"."cost_max", "activity_category"."category"
// FROM "camp"
// JOIN "regions"
// ON  "camp"."region_id" = "regions"."id"
// JOIN "camps_activities"
// ON "camp"."id"="camps_activities"."camp_id"
// JOIN "activities"
// ON "activities"."id"="camps_activities"."activity_id"
// JOIN "activity_category"
// ON "activities"."category_id"="activity_category"."id"
// JOIN "camp_program"
// ON "camp"."id"="camp_program"."camp_id"
// JOIN "gender"
// ON "camp_program"."gender_id"="gender"."id"
// JOIN "camp_type"
// ON "camp_program"."type_id"="camp_type"."id"
// JOIN "program_dates"
// ON "camp_program"."id"="program_dates"."program_id"
// JOIN "states"
// ON "regions"."state_id" = "states"."id"
// WHERE "camp_program"."age_min" >= $1
// AND "camp_program"."age_max" <= $2
// AND "gender"."gender" = $3
// AND "camp"."religion" = $4
// AND "camp_type"."type" = $5
// AND "activity_category"."category" = $6
// AND "activities"."activity" = $7
// AND "camp"."cost_min" >= $8
// AND "camp"."cost_max" <= $9
// AND "camp"."disabled_friendly" = $10
// AND "regions"."region"= $11
// AND "states"."state"= $12
// AND "start_date" >= $13
// AND "program_dates"."end_date" <= $14;`;
const queryText =`SELECT DISTINCT "camp"."Name", "camp"."photo_url", "camp"."address", "camp"."id", "regions"."region", "gender"."gender", "camp_type"."type", 
 "camp"."cost_min", "camp"."cost_max","camp"."date_min","camp"."date_max"
FROM "camp"
JOIN "regions"
ON  "camp"."region_id" = "regions"."id"
JOIN "camps_activities"
ON "camp"."id"="camps_activities"."camp_id"
LEFT JOIN "camp_program"
ON "camp"."id"="camp_program"."camp_id"
JOIN "gender"
ON "camp_program"."gender_id"="gender"."id"
JOIN "camp_type"
ON "camp_program"."type_id"="camp_type"."id"
JOIN "states"
ON "regions"."state_id" = "states"."id" 
WHERE "camp_program"."age_min" >= $1
AND "camp_program"."age_max" <= $2
-- Put fields of camp first
AND "camp_program"."gender_id" = $3
AND "camp"."religion" = $4
-- Nested queries second
` + primaryFocus + `;`;

console.log(queryText);

  pool.query(queryText,values)
    .then(result => {
      console.log('search object', result.rows);

      res.send(result.rows);
    }).catch(error => {
      console.log('there is error in get search result router', error);
      res.sendStatus(500);
    });

});

/**
 * POST route template
 */
router.post("/", (req, res) => { });

module.exports = router;
