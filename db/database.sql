CREATE DATABASE IF NOT EXISTS companydb;

USE mycompanydb;

CREATE TABLE employee(
    id int(15) NOT NULL AUTO_INCREMENT,
    name varchar(45) DEFAULT NULL,
    salary int(5) DEFAULT NULL,
    PRIMARY KEY(id)
)

INSERT INTO employee VALUES(1, "Jose Alberto", 3000);