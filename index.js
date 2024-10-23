const express = require("express");

const app = express();
const sql = require('sql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Test",
    password: "Test@12345",
    database: "mydb"
  });

app.use(express.json());

app.get("/summary", (req,res) => {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM transactions", function (err, result, fields) {
          if (err) throw err
          res.status(200).send(result);
        })
})

app.get("/transactions", (req,res) => {
    var rest = con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM transactions", function (err, result, fields) {
          if (err) throw err
          res.status(200).send(result);
        })
})

app.get("/transactions/:id", (req,res) => {
    var id = req.params.id;
    con.query("SELECT * FROM transactions where id=(id)", function (err, result, fields) {
        if (err) throw err
        res.status(200).send(result);
      })
})

app.post("/transactions/, (req,res) => {
    var data = req.body;
    con.query("Insert Into transactions ${(data)}", function (err, result, fields) {
        if (err) throw err
        res.status(200).send("data created");
      })
})

app.put("/transactions/:id", (req,res) => {
    var data = req.params.id;
    con.query("Update Into transactions ${(data)}", function (err, result, fields) {
        if (err) throw err
        res.status(200).send("data updated");
      })
})

app.delete("/transactions/:id", (req,res) => {
    var dataId= req.params.id;
    con.query("Delete from transactions where id={id}", function (err, result, fields) {
        if (err) throw err
        res.status(200).send("data deleted");
      })
})

app.listen(3000, () => {
    console.log(`Port is calling at ${3000}`);
})
