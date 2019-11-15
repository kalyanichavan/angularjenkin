var express=require("express");
var appEmp=express();
var mysql=require("mysql");

var connection=mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'manager',
    database:'karad'
});


connection.connect();
var data=[];

appEmp.post("/",function(req,res)
{
       let eno=parseInt(req.body.no);
        let ename=req.body.name;
        let eaddress=req.body.address;

        let query=`insert into emp values(${eno},'${ename}','${eaddress}')`;
   // res.send(query);
         connection.query(query,function(err,result){
        if(err == null)
        {
            //res.send(result);
            res.contentType("application/json");
            res.send(JSON.stringify(result));

        }
        else
        {
            res.err("ERROR IN INSERTION OF RECORD");
        }
    })
});
    
    



appEmp.put("/:no",function(req,res){
    let eno=parseInt(req.params.no);
    let ename=req.body.name;
    let eaddress=req.body.address;

    let query=`update emp set name='${ename}', address='${eaddress}' where no='${eno}'`;
    //console.log(query);
    //res.send(query);
    connection.query(query,function(err,result){
        if(err == null)
        {
           // res.send(result);
            res.contentType("application/json");
            res.send(JSON.stringify(result));
        }
        else{
            res.err("something wrong");
        }

    })
});

appEmp.delete("/:no",function(req,res){
    let eno=parseInt(req.params.no);
   // let ename=req.body.name;
    //let eaddress=req.body.address;
    let query=`delete from emp where no='${eno}'`;
    //res.send(query);
    connection.query(query,function(err,request){
        if(err == null)
        {
           // res.send(request);
            res.contentType("application/json");
            res.send(request);
        }
        else{
            res.send("something wrong");
        }
        
    })
})



appEmp.get("/",function(req,res){
    //res.send("all emplaoyess");
    connection.query("select * from emp",function(err,result){
        if(err == null)
        {
            //res.send(result);
            res.contentType("application/json");
            res.send(JSON.stringify(result));

        }
        else
        {
            res.send("something went wrong");
        }
          
    })
});

appEmp.get("/:no",function(req,res){
   // res.send("all employess:"+ req.params.no);
    connection.query(`select * from emp where no = ${req.params.no}`,function(err,result){
        if(err == null)
        {
            //res.send(result);
             res.contentType("application/json");
             res.send(JSON.stringify(result));

        }
        else
        {
            res.send("something went wrong");
        }
          
    });
});

module.exports=appEmp;