const express = require("express");
const app = express();
const port = 3001;
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const db_name = path.join(__dirname, "data", "sample.db");

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log("Connect to port 3001");
});

app.get("/albums", (req, res) => {
  const sql = "SELECT * FROM albums ORDER BY Title";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(rows);
  });
});

const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connect to the database 'sample.db'");
});

const sql_create = `CREATE TABLE IF NOT EXISTS Books (
	Book_ID INTEGER PRIMARY KEY AUTOINCREMENT,
	Title VARCHAR(100) NOT NULL,
	Author VARCHAR(100) NOT NULL,
	Comments TEXT
);`;

db.run(sql_create, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("Successful creation of the Books table");
});
