// normal function ko bnane se phle call  kar skte h
// function (mini program) ->  must return something

// function fun(){
//     console.log("object");
//     // undefined
//     return 5;
// }
// let result1 = fun();
// console.log(result1);
// console.log(fun());

// function fun2(){
//     return 10+20;
// }
// console.log(fun2());

// function sum(a,b){
//     return a+b;
// }
// let ans1 = sum(b=20,a=90);
// let ans2 = sum(35,87);
// console.log(ans1);
// console.log(ans2);

// function fun3(a,b,c){
    // c=0 =>c ki value 0
// return a+b+c;
// }
// let res=fun3(1,2,)
// 7 pass = resust 10
// console.log(res);
// nan = not a no -> 3+not defined

// function fun4(){
//     return{
//         name:"Rahul",
//         work:"nothig",
//     }
// }
// console.log(fun4());

// arrow function
// bnane se phle call nhi kiya ja skta

// let arrowFun = ()=>{
//     console.log("this is arrow function");
//     return " return from arrow function"
// }
// let arrowRes = arrowFun();
// console.log(arrowFun);


// let arrowFun2 = (a,b)=>{
   
//     console.log("this is arrow function");
//     return a+b;
// }
//  let res = arrowFun2;
//  console.log(res);
    // nan

// function fun5(a,b){
// return a+b;
// }

// function fun5(a,b,c){
//     return a+b+c;
// }

// function fun5(a,b,c,d){
//     return a+b+c;
// }
// res = fun5(2,3,4);
// res = fun5(2,3,6);
 
 // console.log(res);

// function helper() {
//     console.log("helper function is executing....");
//     return 10;
// }
// function higherorder(fun) {
//     console.log("higher order executing...");
//     let res = fun();
//     return +(res) + 5;
// }
// let result1 = higherorder(helper);
// console.log(result1);

// annonymous function ()=>{}

// let result2 = higherorder(function(){
//     console.log("this is annonymous function");
//     return "30";
// })
// console.log(result2);

// call back function

// function cb(a,b){
//     console.log("call back execution");
//     return a+b;
// }

// function parent(a,b,fun){
//     console.log("higher order executing");
//     let sum = a+b;
//     // let result = fun(sum,20);
//     // return result;
//     // two line in one
//     return fun(sum,20);

// }
// let ans2 = parent(10,20,cb);
// console.log(ans2)


// call back function

// let ar = [1,2,3,4,5,6];
// function square(num){
//     // return num * num;
//      return num**2;}
//      function cube(num){
//     // return num * num;
//      return num**3;
// }
// function ArrConvertor(array,fun){
//     let ar=[];
//     for(let element of array){
//         let powVal = fun(element);
//         ar.push(powVal);
//     }

//     return ar;
// }
// let sqArr = ArrConvertor(ar,square);
//  console.log(sqArr);
//  let cubeArr = ArrConvertor(ar,cube);
//  console.log(cubeArr);

// *

// function cb(x){
//     console.log("callback function execution",x);
//     return function(y){
//         console.log("inner function execution",y);
//         return x+y;
//     };
// }
// function higher(callback){
//     console.log("higher order function execution");
//     let innerFunc = callback(5);
//     console.log("this is below call");
//     return innerFunc(10);
// }
// console.log(higher(cb));

// // **

// function cb(x){
//     console.log("callback function execution",x);
//     if(x>10){
//         return "greater than 10";
//     }
//     else{
//         return "less than 10";
//     }
// }

// function higher(callback,value){
//     console.log("higher order function");
//     let ans = callback(value);
//     console.log("this is below call");
//     return ans;
// }
// console.log(higher(cb,12));
// console.log(higher(cb,8));

// // **
// function cb(){
//     console.log("callback function");
//     return function(){
//         console.log("inner function 1");
//         return function(){
//             console.log("inner function 2");
//             return "final return";
//         };
//     };
// }
// function higher(callback){
//     console.log("higher order function");
//     let innerFunc1 = callback();
//     console.log("this is below call");
//       let innerFunc2 = innerFunc1();
//       console.log("this is below call");
//       return innerFunc2();
// }
// console.log(higher(cb));

// **

// let num2 = prompt("Enter a number");
// console.log(num2);

// isNaN(num2) ? console.log("You entered a word.") :
//  (Number(num2) === 0 ? console.log("The number is zero.") : 
//  (Number(num2) < 0 ? console.log("The number is less than 0.") : 
//   console.log("The number is greater than 0."))
//     );

// let num = prompt("Enter your age:");
// if (isNaN(num)) {
//     console.log("You entered a word.");
// } else {
//     num = Number(num);

//     if (num === 0) {
//         console.log("The number is 0.");
//     } else if (num < 0) {
//         console.log("The number is less than 0.");
//     } else {
//         console.log("The number is greater than 0.");
//     }
// }

// square of no
//  let arr1 = [1,2,3,4,5];

// function square(num){
//     return num*num;
// }

// let sqArr =arr1.map(square);
// sqArr = arr1.map(function(num){
//     return num*num;
// })

// sqArr = arr1.map((num)=>{
//     return num*num;
// })
// console.log(sqArr);


// let cubeArr = arr1.map((num)=>{
//     return num**3;
// })



// // filter
// let arr1=[1,2,3,4,5];
// function odd(num){
//     return (num % 2 ==1);
// }

//  let  oddArr = arr1.filter(odd);
//  oddArr = arr1.filter((num)=>{
//      return (num%2==1);
//  })
//  console.log(oddArr);
