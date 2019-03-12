const fs = require("fs");

// console.log("Begin");
// fs.writeFile("text.txt", "hello world", function(error){
//     if(error) console.log(error)
//     else console.log("write file success!!");
// });
// fs.writeFileSync("textSync.txt", "hello world");
// console.log("End");


console.log("Begin");
const data = fs.readFile("text.txt",function(err, data){
    if(err) console.log(err)
    else console.log(data + " ");
});
console.log(data);
const dataSync = fs.readFileSync("text.txt","utf-8");
console.log("Sync " + dataSync);
console.log("End");