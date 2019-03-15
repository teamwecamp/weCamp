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

-- camp #4 without insta and twitter
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", 
"disabled_friendly", "phone", "facebook", "photo_url", "logo_url", "website") VALUES ('Camp Winnebago', '19708 Camp Winnebago Road Caledonia, MN 55921', 
2, '6/12/2019', '8/4/2019', 3, false, 950, 1350, true, 5077242351, 'https://www.facebook.com/campwinnebagocaledonia?fref=ts', 
'http://www.campwinnebago.org/uploads/1/6/8/2/16820308/2183326.jpg', 'http://www.campwinnebago.org/uploads/1/6/8/2/16820308/published/1465936858.png', 
'http://www.campwinnebago.org');

-- camp #5 without social media (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", 
"phone", "photo_url", "logo_url", "website") VALUES ('Camp Koronis', '15752 County Road 181  Paynesville, MN 56362-9377', 3, '6/12/2019', '8/3/2019', 3, true, 
195, 680, false, 8556221973, 'https://www.koronisministries.org/files/tables/content/10569568/fields/primaryimage/00b97725562041e9b41f85945eb655a3/kayak+01.jpg?width=400&height=300&mode=crop', 
'https://www.koronisministries.org/files/content/camps/images/koronis/newlogo_koronis.png', 'https://www.koronisministries.org/');

-- camp #6 without insta and twitter (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", 
"phone", "facebook", "photo_url", "logo_url", "website") VALUES ('Reinbows Inc of Windom', '43341 480th Ave Windom, MN 56101-3326', 2, '6/10/19', '6/14/19', 
3, false, 300, 300, false, 5078220526, 'https://www.facebook.com/ReinbowsInc/', 'https://www.reinbowsinc.org/wp-content/uploads/2018/11/IMG_8094.jpg', 
'https://www.reinbowsinc.org/wp-content/uploads/2018/03/Reinbows-Logo-1.jpg', 'https://www.reinbowsinc.org/programs/summer-horse-camps/');

-- camp #7 with insta, fb and twitter (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", 
"phone", "facebook", "twitter", "instagram", "photo_url", "logo_url", "website") VALUES ('ASI Summer Day Camps', '2600 Park Avenue Minneapolis MN 55407', 4, 
'6/24/2019', '8/15/19', 3, false, 60, 125, true, 6128714907, 'https://www.facebook.com/AmericanSwedishInstitute', 'https://twitter.com/AmSwedInstitute', 
'https://www.instagram.com/amswedinstitute/', 'https://www.asimn.org/sites/default/files/styles/oc_picture_header_desk_narrow/public/vikings_1.jpg?itok=h7aH25ir&timestamp=1405627522', 
'https://www.asimn.org/sites/all/themes/oc_child/logo.png', 'https://www.asimn.org/programs-education/youth-and-family-programs/summer-day-camps/summer-day-camps');

-- camp #8 with insta, fb and twitter (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", "phone", 
"facebook", "twitter", "instagram", "photo_url", "logo_url", "website") VALUES ('Camp Como', '1225 Estabrook Drive, Saint Paul, MN 55103', 4, '6/10/19', '8/30/19', 
3, false, 135, 330, true, 6514878272, 'https://www.facebook.com/ComoZooConservatory', 'https://twitter.com/ComoZoo', 'https://www.instagram.com/comozooconservatory/', 
'http://www.comozooconservatory.org/wp-content/uploads/2019/01/01.-giraffe-feeding-6.jpg', 'http://www.comozooconservatory.org/wp-content/uploads/2019/02/2019-camp-como.jpg', 
'http://www.comozooconservatory.org/education/kids/camps/#/general');

-- camp #9 without twitter (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", "phone", 
"facebook", "instagram", "photo_url", "logo_url", "website") VALUES ('Mpls Bouldering Project Summer Camps', '1433 W. River Rd N. Minneapolis, MN 55411', 4, 
'6/10/19', '8/23/19', 3, false, 200, 250, false, 6123082800, 'https://www.facebook.com/minneapolisboulderingproject', 'https://www.instagram.com/minneapolisboulderingproject/', 
'https://static1.squarespace.com/static/58b0821a86e6c0c83ba97a07/5c3cc9d221c67c086c3b0427/5c3cd1c9b8a04593c30186e5/1547493889763/Youth+1.jpg?format=2500w', 
'https://static1.squarespace.com/static/58b0821a86e6c0c83ba97a07/t/59cc8df064b05f23fa454581/1552336470786/?format=1500w', 'https://minneapolisboulderingproject.com/summer-camps');

-- camp #10 without twitter (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", "phone", 
"facebook", "instagram", "photo_url", "logo_url", "website") VALUES ('Camp Lake Hubert for Girls', 'PO Box 1308 Lake Hubert, MN 56459', 1, '6/14/19', '8/21/19', 2, false, 725, 
9775, false, 8002421909, 'https://www.facebook.com/camplincolncamplakehubert/', 'https://www.instagram.com/camplincolncamplakehubert/', 
'https://www.lincoln-lakehubert.com/wp-content/uploads/2017/07/PaddleboardGirls3.jpg', 'https://www.lincoln-lakehubert.com/wp-content/uploads/2015/04/logo2.png', 
'https://www.lincoln-lakehubert.com/girls-camp/');

-- camp #11 without twitter (no programs)
INSERT INTO "camp" ("Name", "address", "region_id", "date_min", "date_max", "gender_id", "religion", "cost_min", "cost_max", "disabled_friendly", "phone", "facebook", 
"instagram", "photo_url", "logo_url", "website") VALUES ('Camp Lincoln for Boys', 'PO Box 1308 Lake Hubert, MN 56459', 1, '6/14/19', '8/15/19', 1, false, 725, 9775, 
false, 8002421909, 'https://www.facebook.com/camplincolncamplakehubert/', 'https://www.instagram.com/camplincolncamplakehubert/', 
'https://www.lincoln-lakehubert.com/wp-content/uploads/2017/07/HighRopesBoys3.jpg', 'https://www.lincoln-lakehubert.com/wp-content/uploads/2015/04/logo2.png', 
'https://www.lincoln-lakehubert.com/boys-camp/');

INSERT INTO "camp_program" ("title", "gender_id", "type_id", "cost", "age_min", "age_max", "camp_id") 
VALUES ('Memorial Day Work Weekend', 3, 1, 0, 13, 99, 1), ('Main Sessions', 3, 1, 750, 13, 18, 1), 
('Womens Way Canoe Trip', 2, 1, 500, 18, 99, 1), ('Two Weeks', 3, 1, 3025, 8, 16, 2), ('Four Weeks', 3, 1, 5775, 8, 16, 2), 
('Six Weeks', 3, 1, 8450, 8, 16, 2), ('Day Play', 3, 2, 25, 7, 8, 3), ('Explorer Camp', 3, 1, 440, 9, 14, 3), 
('Confirmation Camp', 3, 1, 440, 12, 16, 3), ('Kids & Teens low care', 3, 1, 950, 5, 19, 4), ('Kids & Teens medium care', 3, 1, 1250, 5, 19, 4), 
('Kids & Teens high care', 3, 1, 1350, 5, 19, 4);

-- program dates without start times
INSERT INTO "program_dates" ("start_date", "end_date", "program_id", "registration_start_date", "registration_deadline") 
VALUES ('5/24/2019', '5/27/2019', 1, '3/1/2019', '5/23/2019'), ('6/16/2019', '6/24/2019', 2, '3/1/2019', '5/31/2019'), 
('7/5/2019', '7/13/2019', 2, '3/1/2019', '5/31/2019'), ('7/14/2019', '7/22/2019', 2, '3/1/2019', '5/31/2019'), 
('7/24/2019', '8/1/2019', 2, '3/1/2019', '5/31/2019'), ('7/14/2019', '7/20/2019', 3, '3/1/2019', '5/31/2019'), ('7/10/2019', 
'7/14/2019', 10, '3/1/2019', '6/1/2019'), ('7/10/2019', '7/14/2019', 11, '3/1/2019', '6/1/2019'), ('7/10/2019', '7/14/2019', 12, 
'3/1/2019', '6/1/2019');

-- program dates with start times
INSERT INTO "program_dates" ("start_date", "end_date", "start_time", "end_time", "program_id", "registration_start_date", 
"registration_deadline") VALUES ('6/11/2019', '6/11/2019', '9:00', '16:30', 7, '2/15/2019', '6/1/2019'), ('7/16/2019', '7/16/2019', 
'9:00', '16:30', 7, '2/15/2019', '6/1/2019'), ('8/7/2019', '8/7/2019', '9:00', '16:30', 7, '2/15/2019', '6/1/2019'), ('7/14/2019', 
'7/19/2019', '3:00', '13:00', 8, '2/15/2019', '6/1/2019'), ('8/16/2019', '8/21/2019', '3:00', '13:00', 8, '2/15/2019', '6/1/2019'), 
('6/9/2019', '6/14/2019', '3:00', '13:00', 9, '2/15/2019', '6/1/2019'), ('7/28/2019', '8/2/2019', '3:00', '13:00', 9, '2/15/2019', 
'6/1/2019');


INSERT INTO "camps_activities" ("activity_id", "camp_id") VALUES (17, 1), (19, 1), (5, 2), (3, 2), (13, 2), (19, 2), (17, 2), 
(9, 2), (6, 2), (11, 2), (20, 3), (21, 3), (17, 3), (19, 3), (5, 3), (6, 3), (5,4), (6,4), (22,4), (17,4), (21,4), (20,4), (19,4);

INSERT INTO "program_activities" ("activity_id", "program_id") 
VALUES (17, 1), (19, 2), (17, 2), (17, 3), (19, 3), (5, 4), (3, 4), (13, 4), (19, 4), (17, 4), (9, 4), (6, 4), (11, 4), 
(5, 5), (3, 5), (13, 5), (19, 5), (17, 5), (9, 5), (6, 5), (11, 5), (5, 6), (3, 6), (13, 6), (19, 6), (17, 6), (9, 6), 
(6, 6), (11, 6), (20, 7), (21, 7), (20, 8), (21, 8), (17, 8), (19, 8), (5, 8), (6, 8), (20, 9), (21, 9), (17, 9), (19, 9), 
(5, 9), (6, 9), (5,10), (6,10), (22,10), (17,10), (21,10), (20,10), (19,10), (5,11), (6,11), (22,11), (17,11), (21,11), 
(20,11), (19,11), (5,12), (6,12), (22,12), (17,12), (21,12), (20,12), (19,12);

