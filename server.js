/*
 const express = require("express");
 const app = express();
 const port = 3001;

 app.get("/", (req, res) => {
 res.send("test");
 });

 app.listen(port, () => {
 console.log("hi from server");
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
 */
