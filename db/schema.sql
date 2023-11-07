-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE Product (
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  price DECIMAL(6, 2) NOT NULL,
  stock INT NOT NULL, DEFAULT 10,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES Category(id)
)

CREATE TABLE Category (
    id INT AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(30) NOT NULL,

)

CREATE TABLE Tag (
    id INT AUTO_INCREMENT NOT NULL, 
    tag_name: VARCHAR(30) NOT NULL,
)

CREATE TABLE Product_Tag (
    id INT AUTO_INCREMENT NOT NULL,
    product_id INT, 
    tag_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (tag_id) REFERENCES Tag(id)
);

