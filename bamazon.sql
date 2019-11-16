DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(40) NOT NULL,
  department_name VARCHAR(40) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike sweater", "Sportswear", 50.50, 90), ("Lakers Cap", "Sportswear", 25.00, 30), ("Nike AirFlights", "Sportwear", 75.25, 8), ("Spring Flingkini", "Swimwear", 20.25, 75), ("Kween One Piece", "Swimwear", 40.50, 75), ("CK Exstacy", "Cologne", 50.25, 9), ("Mr Zeus", "Cologne", 35.00, 23), ("Yeezy Zoom-Special", "Sportswear", 120.00, 0), ("Mega-Madame", "Perfume", 3.25, 75), ("Jumpman Anniversary-Limited", "Sportswear", 145.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lakers Cap", "Sportswear", 25.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike AirFlights", "Sportwear", 75.25, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spring Flingkini", "Swimwear", 20.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kween One Piece", "Swimwear", 40.50, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CK Exstacy", "Cologne", 50.25, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mr Zeus", "Cologne", 35.00, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yeezy Zoom-Special", "Sportswear", 120.00, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mega-Madame", "Perfume", 3.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jumpman Anniversary-Limited", "Sportswear", 145.00, 2);


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

