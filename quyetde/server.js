const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const app = express();
const QuestionModel = require("./models/question") 

mongoose.connect("mongodb://localhost:27017/web20_quyetde",(err) =>{
	if(err) console.log(err)
	else console.log("Connect success!!")
	// QuestionModel.find({ },(err,docs)=>{
	// 	if(err) console.log(err)
	// 	else console.log(docs)
		
	// })
})

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/randomquestion", (req, res) => {
	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));

	QuestionModel.find({},(err,questionList)=>{
		if(err) console.log(err)
		else res.send(questionList[Math.floor(Math.random()*questionList.length)]);
		
	})
	
	// const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
	// console.log(randomQuestion);
	// res.send(randomQuestion);
});

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/views/ask.html");
});

// app.put("/editquestion", (req, res) => {
// 	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
// 	const question = req.body;
// 	questionList[question.id] = question;
// 	fs.writeFileSync("./questions.json", JSON.stringify(questionList));

// 	// QuestionModel.find({ },(err,docs)=>{
// 	// 	if(err) console.log(err)
// 	// 	else console.log(docs)
	
// });

app.post("/addquestion", (req, res) => {
	QuestionModel.create({content:req.body.question},(err,question)=>{
		if(err) console.log(err)
		else console.log("Success!!")
	})
	res.redirect("/ask");
});

app.get("/vote/:questionId/yes", (req, res) => {
	// console.log(req.params.questionId);

	const questionId = req.params.questionId

	QuestionModel.findOne({_id:questionId},(err,data) =>{
		console.log(data);
		if(data){
			data.yes += 1;
			data.save((err,docs)=>{
				if(err) console.log(err)
				res.redirect(`/question/${questionId}`);
			})
		}
	})
});

app.get("/vote/:questionId/no", (req, res) => {
	const questionId = req.params.questionId

	QuestionModel.findOne({_id:questionId},(err,data) =>{
		console.log(data);
		if(data){
			data.no += 1;
			data.save((err,docs)=>{
				if(err) console.log(err)
				res.redirect(`/question/${questionId}`);
			})
		}
	})
	// const questionId = req.params.questionId;
	// questionList[questionId].no = Number(questionList[questionId].no) + 1;
	// fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	// res.redirect(`/question/${questionId}`);
});

app.get("/question/:questionId", (req, res) => {
	res.sendFile(__dirname + "/views/questionInfo.html");
});

app.get("/detail/:questionId", (req, res) => {
	QuestionModel.findOne({_id:req.params.questionId },(err,data)=>{
		if(err) console.log(err)
		else res.send(data)
	})
	// const questionId = req.params.questionId;
	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const question = questionList[questionId];
	// res.send(question);
});

// app.post("/", (req, res) => {
// 	console.log("POST");
// });
// app.put("/", (req, res) => {
// 	console.log("PUT");
// });
// app.delete("/", (req, res) => {
// 	console.log("DELETE");
// });

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});