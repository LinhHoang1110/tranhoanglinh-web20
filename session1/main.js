// console.log("Hello world");

// // khai bao bien

// const constvar = "Hello";


// //let, var : de khai bao bien co the thay doi duoc

// let a = 123;

// var b = "abcde";

// a = 100000;

// b = "Hello";

// // console.log(a);
// // console.log(b);

// console.log(typeof a);
// console.log(typeof b);

// function aFunc(a,b,c){
//     console.log(a,b,c);
// }

// aFunc(10,"asdasd");

// const bFunc = function(){
//     console.log("Hello");
// }

// const cFunc = () => {
//     console.log("World");
// }

// bFunc();
// cFunc();            

//********************** */
//var => function scope
// let a = 100;

// function print(){
//     let b = 50;

//     if(1+1==2){
//         let c = 5;
//         console.log(c);
//         console.log(b);
//         console.log(a);
//     }

//     console.log(c);
//     console.log(b);
//     console.log(a);
// }
// print();


// let => block scope

// function print(num,waitTime){
//     setTimeout(function()  {
//         console.log(num);
//     }, 1000*waitTime);
// }

// function countDown(num){
//     for(var i = num; i >= 0; i--){
//        print(i,num - i);
//     }
// }

// countDown(5);

// function aFunc(){
//     a = 10;
//     window.b = "aaaaaa";
// }

// aFunc();

// console.log(a);
// console.log(b);

console.log("hello");

function print(onWaitDone){
    setTimeout(function()  {
        console.log("world");
        onWaitDone();
    },1000); 
}

print(function()  {
    console.log("!!!!!!!!")
});

// clone deep: dùng khi muốn 2 obj giống nhau, không thể obj1 = obj2
// 
              
