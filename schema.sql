DROP DATABASE IF EXISTS eduproject;
CREATE DATABASE eduproject;
USE eduproject;
CREATE TABLE student (
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname varchar (50),
    username varchar (50) NOT NULL,
    lastname varchar (50) ,
    secretinfo varchar (150) ,
    password varchar (250) NOT NULL,
    email varchar (50) NOT NULL ,
    country varchar (50) ,
    city varchar (50) , 
    addresspostal varchar (50) ,
    driving varchar (50) , 
    dateOfBirth varchar (50) ,
    placeOfBirth varchar (50)  ,
    nationality varchar (50) ,
    summery varchar (500) ,
    education varchar (50)  , 
    socialLink varchar (100) ,
    skills varchar (50)  , 
    languages varchar (50) , 
    hobbies varchar (50) , 
    profilePic varchar (100)  ,
    verification BOOLEAN , 
    verRequest BOOLEAN , 
    firstTime BOOLEAN , 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
