const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const exphbs =require("express-handlebars");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
const dataPrep = require("./data_prep");

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
    

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/CPA", (req, res) => {
    res.sendFile(__dirname + "/data/cpa.json");
});

app.get("/highGPA", (req, res) => {
    res.sendFile(__dirname + "/views/highGPA.html");
});

dataPrep.prep()
    .then(() => {
        app.listen(8080, onHttpStart);
    }).catch((err) => {
        console.log(err);
    });
   
   
   