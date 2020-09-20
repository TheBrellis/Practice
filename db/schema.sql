create database practice_db;
use practice_db;
create table projects
(
    id INTEGER
    AUTO_INCREMENT,
    title VARCHAR
    (255) NOT NULL,
	url_deployed VARCHAR
    (255) NOT NULL,
    PRIMARY KEY
    (id)
);