-- Create the database
DROP DATABASE Unload;
CREATE DATABASE Unload

-- Insert Information on database
USE Unload;
INSERT INTO Categories (categoryName,createdAt, updatedAt) 
VALUES 
("WATCHES", NOW(), NOW()), 
("BAGS", NOW(), NOW()), 
("SHOES", NOW(), NOW());

INSERT INTO UserTypes (userTypeName, createdAt, updatedAt)
VALUES 
("Buyer", now(), now()),
("Seller", now(), now()),
("Admin", now(), now());


INSERT INTO Users (email, userName, firstName, lastName, password, phone, street, city, state, zipcode, UserTypeUserTypeId, createdAt, updatedAt)
values 
("test@gmail.com",	"Name", "Camilo","Agudelo",	"password",	"123456789",	"St",	"New York",	"NY",	"10128", 2, now(),now()),
("test2@gmail.com",	"Name2", "Gian","Jalaan", "password2",	"123456789",	"St",	"New York",	"NY",	"10128", 1, now(),now()),
("test3@gmail.com",	"Name3", "Yolanda","Ramirez","password3",	"123456789",	"St",	"New York",	"NY",	"10128", 1, now(),now()),
("test4@gmail.com",	"Name4", "Eugene","Wells","password4",	"123456789",	"St",	"New York",	"NY",	"10128",2, now(),now());


INSERT INTO products 
(productName, description, imgLink, used, initQuantity, availableQuantity, soldCounter, uploadDate, price, size, UseruserId, createdAt, updatedAt)
VALUES 
("watch1",	"test1",	"kjlhjk",	1,	20,	20,	0,	now(),	100.00,	12,	1,	NOW(), NOW()),
("watch2",	"test2",	"kjlhjk",	1,	20,	20,	0,	now(),	100.00,	12,	2,	NOW(), NOW()),
("watch3",	"test3",	"kjlhjk",	1,	20,	20,	0,	now(),	100.00,	12,	1,	NOW(), NOW()),
("Bag1",	"test1",	"kjlhjk",	1,	30,	25,	0,	now(),	200.00,	12,	2,	NOW(), NOW()),
("Bag2",	"test2",	"kjlhjk",	1,	30,	25,	0,	now(),	200.00,	12,	1,	NOW(), NOW()),
("Bag3",	"test3",	"kjlhjk",	1,	30,	25,	0,	now(),	200.00,	12,	2,	NOW(), NOW()),
("Shoe1",	"test1",	"kjlhjk",	1,	50,	40,	0,	now(),	50.00,	12,	1,	NOW(), NOW()),
("Shoe2",	"test2",	"kjlhjk",	1,	50,	40,	0,	now(),	50.00,	12,	1,	NOW(), NOW()),
("Shoe3",	"test3",	"kjlhjk",	1,	50,	40,	0,	now(),	50.00,	12,	1,	NOW(), NOW());


INSERT INTO CategoryProducts
(ProductproductId, CategorycategoryId, createdAt, updatedAt)
VALUES
(1,1,NOW(),NOW()),
(1,2,NOW(),NOW()),
(2,3,NOW(),NOW()),
(3,1,NOW(),NOW());

INSERT INTO Banks (bankName, createdAt, updatedAt) VALUES ("Citibank",NOW(),NOW()), ("Chase",NOW(),NOW()), ("Bank of America",NOW(),NOW()), ("Capital One",NOW(),NOW());

INSERT INTO Accounts (number,initBalance,balance,createdAt,updatedAt,BankBankId,UserUserId)
VALUES 
("123456", 10000, 10000, NOW(), NOW(), 1, 1),
("123456", 10000, 10000, NOW(), NOW(), 2, 2),
("123456", 10000, 10000, NOW(), NOW(), 3, 3),
("123456", 10000, 10000, NOW(), NOW(), 4, 4);




