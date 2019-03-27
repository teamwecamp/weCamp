CREATE DATABASE "wecamp";

CREATE TABLE "states" (
	"id" serial primary key,
	"state" varchar(20) NOT NULL
);


CREATE TABLE "regions" (
	"id" serial primary key,
	"state_id" int NOT NULL REFERENCES "states",
	"region" varchar(25) NOT NULL
);


CREATE TABLE "gender" (
	"id" serial primary key,
	"gender" varchar(10) NOT NULL
);


CREATE TABLE "camp_type" (
	"id" serial primary key,
	"type" varchar(35) NOT NULL
);


CREATE TABLE "activity_category" (
    "id" serial primary key,
    "category" varchar(25) NOT NULL
);


CREATE TABLE "activities" (
	"id" serial primary key,
	"activity" varchar(40) NOT NULL,
    "category_id" int NOT NULL REFERENCES "activity_category"
);


CREATE TABLE "camp" (
	"id" serial primary key,
	"name" varchar(100) NOT NULL,
	"address" TEXT NOT NULL,
	"region_id" int NOT NULL REFERENCES "regions",
	"date_min" DATE NOT NULL,
	"date_max" DATE NOT NULL,
	"gender_id" int NOT NULL REFERENCES "gender",
	"religion" BOOLEAN NOT NULL,
	"cost_min" int NOT NULL,
	"cost_max" int NOT NULL,
	"disabled_friendly" BOOLEAN NOT NULL,
	"phone" varchar(10),
	"instagram" varchar(80),
	"facebook" varchar(80),
	"twitter" varchar(80),
	"photo_url" text,
	"logo_url" text,
	"website" varchar(100),
    "date_added" timestamp without time zone DEFAULT now(),
	"sponsored" BOOLEAN DEFAULT false,
	"summary" text
);


CREATE TABLE "camps_activities" (
	"id" serial primary key,
	"activity_id" int NOT NULL REFERENCES "activities",
	"camp_id" int NOT NULL REFERENCES "camp"
);


CREATE TABLE "user" (
	"id" serial primary key,
	"password" text NOT NULL,
	"full_name" varchar(40) NOT NULL,
	"email" varchar(50) NOT NULL,
	"street_address" varchar(50),
	"city" varchar(40),
	"state" varchar(20),
	"zip" int
);


CREATE TABLE "child_profile" (
	"id" serial primary key,
	"name" varchar(35) NOT NULL,
	"gender_id" int REFERENCES "gender",
	"DOB" DATE
);


CREATE TABLE "user_child" (
	"id" serial primary key,
	"child_id" int NOT NULL REFERENCES "child_profile",
	"user_id" int NOT NULL REFERENCES "user"
);


CREATE TABLE "child_activities" (
	"id" serial primary key,
	"child_id" int NOT NULL REFERENCES "child_profile",
	"activity_id" int NOT NULL REFERENCES "activities"
);


CREATE TABLE "camp_program" (
	"id" serial primary key,
	"title" varchar(50) NOT NULL,
	"gender_id" int NOT NULL REFERENCES "gender",
	"type_id" int NOT NULL REFERENCES "camp_type",
	"cost" int NOT NULL,
	"age_min" int NOT NULL,
	"age_max" int NOT NULL,
	"camp_id" int NOT NULL REFERENCES "camp"
);


CREATE TABLE "program_dates" (
	"id" serial primary key,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL,
	"start_time" TIME,
	"end_time" TIME,
	"program_id" int NOT NULL REFERENCES "camp_program",
    "registration_start_date" DATE NOT NULL,
	"registration_deadline" DATE NOT NULL
);



CREATE TABLE "program_activities" (
	"id" serial primary key,
	"activity_id" int NOT NULL REFERENCES "activities",
	"program_id" int NOT NULL REFERENCES "camp_program"
);


CREATE TABLE "status" (
	"id" serial primary key,
	"status" varchar(15) NOT NULL
);


CREATE TABLE "child_itinerary" (
	"id" serial primary key,
	"user_child_id" int NOT NULL REFERENCES "user_child",
	"dates_id" int NOT NULL REFERENCES "program_dates",
	"status_id" int NOT NULL REFERENCES "status"
);


CREATE TABLE "sharing" (
	"id" serial primary key,
	"user_child_id" int NOT NULL REFERENCES "user_child",
	"shared_to_id" int NOT NULL REFERENCES "user"
);


CREATE TABLE "favorites" (
	"id" serial primary key,
	"user_child_id" int NOT NULL REFERENCES "user_child",
	"camp_id" int NOT NULL REFERENCES "camp",
	"favorite" BOOLEAN NOT NULL
);

INSERT INTO "gender" ("gender") VALUES ('boy'), ('girl'), ('co-ed');

INSERT INTO "camp_type" ("type") VALUES ('overnight'), ('day'), ('half-day'), ('other');

INSERT INTO "states" ("state") VALUES ('Alabama'), ('Alaska'), ('Arizona'), ('Arkansas'), ('California'),
('Colorado'), ('Connecticut'), ('Delaware'), ('Florida'), ('Georgia'), ('Hawaii'), ('Idaho'), ('Illinois'),
('Indiana'), ('Iowa'), ('Kansas'), ('Kentucky'), ('Louisiana'), ('Maine'), ('Maryland'), ('Massachusetts'),
('Michigan'), ('Minnesota'), ('Mississippi'), ('Missouri'), ('Montana'), ('Nebraska'), ('Nevada'),
('New Hampshire'), ('New Jersey'), ('New Mexico'), ('New York'), ('North Carolina'), ('North Dakota'),
('Ohio'), ('Oklahoma'), ('Oregon'), ('Pennsylvania'), ('Rhode Island'), ('South Carolina'), ('South Dakota'),
('Tennessee'), ('Texas'), ('Utah'), ('Vermont'), ('Virginia'), ('Washington'), ('West Virginia'),
('Wisconsin'), ('Wyoming');

INSERT INTO "regions" ("region", "state_id") 
VALUES ('Northern MN', 23), ('Southern MN', 23), ('Central MN', 23), ('Twin Cities', 23);

INSERT INTO "status" ("status") VALUES ('interested'), ('applied'), ('registered'), ('waitlisted');

INSERT INTO "activity_category" ("category") VALUES ('music'), ('athletic/sports'), ('outdoor/adventure'),
('academic'), ('arts'), ('lifestyle');

INSERT INTO "activities" ("activity", "category_id") VALUES ('academic', 4), ('theater', 5), ('visual arts', 5), 
('cooking', 6), ('baseball', 2), ('basketball', 2), ('golf', 2), ('gymnastics', 2), ('horseback riding', 3),
('lacrosse', 2), ('rock climbing', 3), ('sailing', 3), ('soccer', 2), ('tennis', 2), ('track and field', 2), ('band', 1), 
('hiking', 3), ('choir', 1), ('canoeing', 3), ('swimming', 3), ('arts & crafts', 5), ('general music & singing', 1), 
('foreign language', 4);
