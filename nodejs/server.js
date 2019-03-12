const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, "../session2/index.html"));
});

//param 
//http://localhost:6969/tranhoanglinh
// app.get("/:name",function(req,res){
//     console.log(req.params.name);
//     res.send(req.params.name);
// });

//query
// http://localhost:6969/query?name=tranhaonglih&age=18&keyvalue
app.get("/query",function(req,res){
    console.log(req.query);
    res.send("<h1>"+ req.query.name +"</h1>")
});

app.listen(6969, function(err){
    if(err) console.log(err)
    else console.log("Server start success!!");
});

//http://localhost:6969