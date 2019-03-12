const express = require("express");

const fs = require("fs")
const data = fs.readFileSync("web20.json","utf-8");

var name_obj = JSON.parse(data);


const app = express();

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/web20.html")
// })



// http://localhost:1110/web20
// app.get("/:name",function(req,res){
//     var li = "";
//     for(var i = 0 ; i < name_obj.length ; i++){
//         li = li + "<li>"+name_obj[i]+"</li>"
//     }
//     res.send("<ul>"+li+"</ul>")
// });

app.get("/:classname",(req,res) => {
    const classname = req.param.classname;
    if(fs.existsSync(`data/${classname}.json`)){
        // const classData = fs.readFileSync("/data"+classname+".json","utf-8");
        const classData = fs.readFileSync(`data/${classname}.json`,"utf-8");
        const classDataArr = JSON.parse(classData);
        const listItemHtml = classDataArr.map(item => `<li>${item}</li>`).join("");
        res.send(`<ul>${listItemHtml}</ul>`)
    }
    else res.send("not found")
    
})


app.listen(1110, function(err){
    if(err) console.log(err);
    else console.log("Server start success!!")
})

// http://localhost:1110