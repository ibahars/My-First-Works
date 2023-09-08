const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "orders",
});
connection.connect();

const tableName = "my_products";
const dropTableQuery = `DROP TABLE IF EXISTS ${tableName}`;

connection.query(dropTableQuery, function (error, results, fields) {
  if (error) throw error;
  console.log(`Table '${tableName}' dropped successfully!`);
});

const updateQuery = `
UPDATE products
SET price = ?
WHERE name = ?
`;

const newPrice = 60;
const productName = "lamb";
connection.query(
  updateQuery,
  [newPrice, productName],
  function (error, results, fields) {
    if (error) throw error;
    console.log("Product updated successfully!");
  }
);

// TABLOYU OLUŞTURDUĞUM KODLAR BURDA
const createTableQuery = `
 CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
 )
 `;

connection.query(createTableQuery, function (error, results, fields) {
  if (error) throw error;
  console.log("Table 'products' created successfully!");
});

const insertQuery = `
INSERT INTO products (id , name , price)
VALUES (?, ?, ?)
`;
const values = [1, "lamb", 30];
connection.query(insertQuery, values, function (error, results, fields) {
  if (error) throw error;
  console.log("it worked");
});

const values2 = [2, "desk", 40];
connection.query(insertQuery, values2, function (error, results, fields) {
  if (error) throw error;
  console.log("second one is worked");
});
const values3 = [3, "chair", 50];
connection.query(insertQuery, values3, function (error, results, fields) {
  if (error) throw error;
  console.log("third one is worked");
});

connection.end();
