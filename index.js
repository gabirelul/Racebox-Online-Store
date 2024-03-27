const express = require("express");
const fs = require('fs');

const app = express(); // Define 'app' here

console.log("Folder proiect", __dirname);
console.log("Cale fisier", __filename);
console.log("Director de lucru", process.cwd());

app.set("view engine", "ejs");

app.use("/resurse", express.static(__dirname + "/resurse"));

app.get(["/", "/home", "/index"], function (req, res) {
    res.render("pagini/index");
});

app.get("/cerere", function (req, res) {
    res.send("<b>Hello</b> <span style='color:red'>world!</span>");
});

app.get("/data", function (req, res, next) {
    res.write("Data: ");
    next();
});

app.get("/data", function (req, res) {
    res.write("" + new Date());
    res.end();
});

app.get("/suma/:a/:b", function (req, res) {
    var suma = parseInt(req.params.a) + parseInt(req.params.b);
    res.send("" + suma);
});

app.get("/*", function (req, res) {
    console.log(req.url);
});

app.listen(8080);
console.log("Serverul a pornit");
