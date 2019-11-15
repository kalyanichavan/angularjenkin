var express=require("express");
var mysql=require("mysql");
var adminRoute=require("./admin");
var empRoute=require("./emp");
var app=express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/admin",adminRoute);
app.use("/employee",empRoute);


app.listen(5000,function(){
    console.log("server started");
});
