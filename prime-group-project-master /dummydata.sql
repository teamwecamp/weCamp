-- camp #1, w/o insta
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", 
"cost_min", "cost_max", "disabled_friendly", "phone", "facebook", "twitter", "photo_url", "logo_url", 
"website") VALUES ('Laketrails Base Camp', 'P.O. Box 25 Oak Island, MN, 56741', 1, '05/24/2019', 
'09-08-2019', 3, false, 550, 750, false, 8004506460, 'https://www.facebook.com/laketrailsbasecamp', 
'https://twitter.com/laketrailscamp', 'http://laketrails.org/wp-content/uploads/2015/01/About-Programs.jpg', 
'http://laketrails.org/wp-content/uploads/2015/01/laketrails-base-camp.png', 'http://laketrails.org/');

-- camp #2, with insta, no twitter
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", 
"cost_min", "cost_max", "disabled_friendly", "phone", "facebook", "instagram", "photo_url", "logo_url", 
"website") VALUES ('Camp Mishawaka', 'P.O. Box 368 / 21525 Mishawaka Rd. Grand Rapids, MN 55744', 1, 
'6/16/2019', '8/9/2019', 3, false, 3025, 9450, false, 2183265011, 'https://www.facebook.com/campmishawaka/', 
'https://www.instagram.com/campmishawaka/', 'https://www.campmishawaka.com/wp-content/uploads/2018/10/gaga-ball-core-values.jpg', 
'https://www.campmishawaka.com/wp-content/uploads/2018/05/logo.svg', 'https://www.campmishawaka.com'); 

-- camp #3, with insta, no twitter
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", 
"cost_min", "cost_max", "disabled_friendly", "phone", "facebook", "instagram", "photo_url", "logo_url", 
"website") VALUES ('Shetek Lutheran Ministeries', '14 Keeley Island Drive, Slayton, MN 56172', 2, '6/9/2019', '8/9/2019', 3, 
true, 25, 515, false, 5077633567, 'https://www.facebook.com/pages/sheteklutheranministries', 
'https://www.instagram.com/sheteklutheranministries/', 'http://shetek.org/wp-content/uploads/2016/12/10914834_10153302359333081_2510963860018673748_o.jpg', 
'https://shetek.org/wp-content/uploads/2016/12/Shetek-Horiz-2000x400.png', 'https://shetek.org/');

-- camp with insta and twitter


INSERT INTO "camp_program" ("title", "gender_id", "type_id", "cost", "age_min", "age_max", "camp_id") 
VALUES ('Memorial Day Work Weekend', 3, 1, 0, 13, 99, 1), ('Main Sessions', 3, 1, 750, 13, 18, 1), 
('Womens Way Canoe Trip', 2, 1, 500, 18, 99, 1), ('Two Weeks', 3, 1, 3025, 8, 16, 2), ('Four Weeks', 3, 1, 5775, 8, 16, 2), 
('Six Weeks', 3, 1, 8450, 8, 16, 2), ('Day Play', 3, 2, 25, 7, 8, 3), ('Explorer Camp', 3, 1, 440, 9, 14, 3), 
('Confirmation Camp', 3, 1, 440, 12, 16, 3);

-- program dates without start times
INSERT INTO "program_dates" ("start_date", "end_date", "program_id", "registration_start_date", "registration_deadline") 
VALUES ('5/24/2019', '5/27/2019', 1, '3/1/2019', '5/23/2019'), ('6/16/2019', '6/24/2019', 2, '3/1/2019', '5/31/2019'), 
('7/5/2019', '7/13/2019', 2, '3/1/2019', '5/31/2019'), ('7/14/2019', '7/22/2019', 2, '3/1/2019', '5/31/2019'), 
('7/24/2019', '8/1/2019', 2, '3/1/2019', '5/31/2019'), ('7/14/2019', '7/20/2019', 3, '3/1/2019', '5/31/2019');

-- program dates with start times
INSERT INTO "program_dates" ("start_date", "end_date", "start_time", "end_time", "program_id", "registration_start_date", 
"registration_deadline") VALUES ('6/11/2019', '6/11/2019', '9:00', '4:30', 7, '2/15/2019', '6/1/2019'), ('7/16/2019', '7/16/2019', 
'9:00', '4:30', 7, '2/15/2019', '6/1/2019'), ('8/7/2019', '8/7/2019', '9:00', '4:30', 7, '2/15/2019', '6/1/2019'), ('7/14/2019', 
'7/19/2019', '3:00', '1:00', 8, '2/15/2019', '6/1/2019'), ('8/16/2019', '8/21/2019', '3:00', '1:00', 8, '2/15/2019', '6/1/2019'), 
('6/9/2019', '6/14/2019', '3:00', '1:00', 9, '2/15/2019', '6/1/2019'), ('7/28/2019', '8/2/2019', '3:00', '1:00', 9, '2/15/2019', 
'6/1/2019');


INSERT INTO "camps_activities" ("activity_id", "camp_id") VALUES (17, 1), (19, 1), (5, 2), (3, 2), (13, 2), (19, 2), (17, 2), 
(9, 2), (6, 2), (11, 2), (20, 3), (21, 3), (17, 3), (19, 3), (5, 3), (6, 3);

INSERT INTO "program_activities" ("activity_id", "program_id") 
VALUES (17, 1), (19, 2), (17, 2), (17, 3), (19, 3), (5, 4), (3, 4), (13, 4), (19, 4), (17, 4), (9, 4), (6, 4), (11, 4), 
(5, 5), (3, 5), (13, 5), (19, 5), (17, 5), (9, 5), (6, 5), (11, 5), (5, 6), (3, 6), (13, 6), (19, 6), (17, 6), (9, 6), 
(6, 6), (11, 6), (20, 7), (21, 7), (20, 8), (21, 8), (17, 8), (19, 8), (5, 8), (6, 8), (20, 9), (21, 9), (17, 9), (19, 9), 
(5, 9), (6, 9);

