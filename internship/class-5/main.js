

//  javascript :- only coding language in MERN
//   it is a weekly type language
//   no need compile before running
//   code compile line by line
  
//   synchronous:- code run line by line (one line of code compile,give result then second line code run and give result)
  
//   compile:- v8 engine :- browser 
  
//   datatype :- 
//   number(float,int)
//   string 
//   boolean((false value :-0,null,undefine,false),1-true)
//   null
//   undefined
  
//   how define variable :- ler,var,const

//        initialise (let a = 9)   declare (let a)   reinitialise (let b=8)   redeclare (a=2)  assign (a=3)     reasign (a=7)     
// var     true                       true                 true                      true               true          true
// let     true                       true                 false                      false              true          true
// const    true                      false                 false                      false              true          false

// const:- can not change value at once it is initialise, but can be updated
// scope:- global,block {} ,

// STACK : It is a data structure which stores the variables in the memory
//   CALL STACK : It is a data structure which stores the function calls in the memory
//   two parts of call stack :
//     1. Execution : Code is executed line by line
//     2. Read : Memory allocation for the variables and functions , only the var variable are undefined initially
// console.log("Hellow World");

// var a=5;
// {
//     // var do not give error it give 5,10,10
//     console.log(a); 
//     var a=10;
//      console.log(a);
// }
// console.log(a);

// let b="helo";
// {
//     // let give error in 37 line
//      console.log(b);
//     let b=20;
//     console.log(b);
// }
// console.log(b);

// const c=true



//  var me code run hoga

// console.log(temp1);
// var temp1="this is temp 1";
// console.log(temp1);

// let and const me code run nhi hoga

// console.log(temp2);
// let temp2="this is temp 2";
// console.log(temp2);

// only in var it take some space and give undefined in console 
// let and const give error in 1st line

// console.log(ar);  
// var ar;
// console.log(ar);
// ar=10;
// console.log(ar);


let arrr = [1,2,3,"item 4",true,null,undefined];
let TwoDArr = [
    [1,2,3],
    [4,5,6]
]
// row-0 col-0
console.log(TwoDArr);
console.log(TwoDArr[0][1]); 
// 2
console.log(TwoDArr[1][2]);

arrr = [1,2,3,4,5,6]
// arrr.unshift(50);
arrr.unshift(50,44,35);
console.log(arrr);
// delete item from begning
arrr.shift();
console.log(arrr);
let aa = [1,2,3,4,5];
// let subarr = as slice(2,4);
let subArr = aa.slice(2);
// start from 2nd index and end at index
console.log(subArr);

// *splice =>middle me item add,delete,replace 
console.log(aa);
aa.splice(3,1);
// 3rd index pr 1 element ko delete kar dega
console.log(aa); 
aa.splice(3,3);
console.log(aa);

// 1st index pr 0 element ko delete kar do and 10,11,12,13 element ko add kar do
aa.splice(1,0,10,11,12,13);
console.log(aa);

let strAA = aa.toString();
let strArr = aa.join(" ");
console.log(strAA);
console.log(strArr);

// string
let str = "my name is Neha";
 let newstr = str.replace("is","in");

console.log(newstr);

// newstr = str.replaceAll("is","in");
// console.log(newstr);

console.log(str[5]);
console.log(str.charAt(5));
console.log(str.startsWith("m"));
console.log(str.endsWith("u"));
console.log(str.includes("Neha"));

str = "this is a laptop";
let arr = str.split(" ");
console.log(arr);









// for(var i=0;i<3;i++){

// }
// console.log(i);
// // 6

// var a=1;
// {
//     let a=2;
//     {
//         // give error we do not redeclre and redefine the let
//         var a=3;
//         console.log(a);
//     }
// }

// // error

// let a=1;
// {
//     var a=2;
// }
// console.log(a);

// // error let se bnane ke bad same var se nhi bna skte
// {
//     var x=5;
//     let x=10;
//     console.log(x);
// }









