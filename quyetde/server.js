const express = require("express")
const bodyParser = require("body-parser");
const fs =require("fs");
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.get("/ask", (req,res) => {
    res.sendFile(__dirname + "/views/ask.html")
});


app.get("/",(req,res) => {
    const listQuestion = JSON.parse(fs.readFileSync("questions.json","utf-8"));
    var randomNum = Math.floor(Math.random() * listQuestion.length);
    res.send(`<h4>${ listQuestion[randomNum] }</h4>`);
})

app.post("/addquestion", (req,res) => {
    const question = req.body.question;
    console.log(question);
    const questionList = JSON.parse(fs.readFileSync("./questions.json","utf-8"));
    questionList.push(question);
    fs.writeFileSync("./questions.json",JSON.stringify(questionList));
    res.redirect("/ask")
});

// app.post("/", (req,res) => {
//     console.log("post");
// });
// app.delete("/", (req,res) => {
//     console.log("delete");
// });
// app.put("/", (req,res) => {
//     console.log("put");
// });

app.listen(6969, (err) => {
    if(err) console.log(err)
    else console.log("server start!!");
});

