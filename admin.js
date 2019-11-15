var express=require("express");
var appAdmin=express();

appAdmin.get("/",function(req,res){
    res.send("ALL ADMIN");
});

appAdmin.get("/:no",function(req,res){
    res.send("ALL ADMINS ARE:"+ req.params.no);
});
module.exports=appAdmin;