const mongoose = require("mongoose")
const model = mongoose.model;
const schema = mongoose.Schema;

const QuestionSchema = new schema({
    content: {type:String, require:true, default:"Question"},
    yes: {type:Number,default:0},
    no: {type:Number,default:0}
})


module.exports = model("question",QuestionSchema);