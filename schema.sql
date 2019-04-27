-- Create the database
CREATE DATABASE Unload


-- INSert Information on database
INSERT INTO Categories(categoryName,createdAt, updatedAt) 
VALUES 
("WATCHES", NOW(), NOW()), 
("BAGS", NOW(), NOW()), 
("SHOES", NOW(), NOW());

INSERT INTO Users (email, userName, password, phone, street, city, state, zipcode, type, createdAt, updatedAt)
values 
("test@gmail.com",	"Name",	"password",	"123456789",	"St",	"New York",	"NY",	"10128",	"seller", now(),now()),
("test2@gmail.com",	"Nam2",	"password2",	"123456789",	"St",	"New York",	"NY",	"10128",	"Buyer", now(),now()),
("test3@gmail.com",	"Name3",	"password3",	"123456789",	"St",	"New York",	"NY",	"10128",	"Buyer", now(),now());

INSERT INTO Sellers (userId, showName, showAddress, createdAt, updatedAt) VALUES (1,1,1,now(),now());

INSERT INTO products 
(productName, description, imgLink, used, initQuantity, availableQuantity, soldCounter, uploadDate, price, size, sellerId, categoryId, createdAt, updatedAt)
VALUES 
("watch1",	"test1",	"kjlhjk",	1,	20,	20,	0,	now(),	100.00,	12,	1,	1,	NOW(), NOW()),
("watch2",	"test2",	"kjlhjk",	1,	30,	25,	0,	now(),	200.00,	12,	1,	1,	NOW(), NOW()),
("watch3",	"test3",	"kjlhjk",	1,	50,	40,	0,	now(),	50.00,	12,	1,	1,	NOW(), NOW())