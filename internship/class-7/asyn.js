// setTimeout(()=>{
//     console.log("this comes after 2sec");
// },2000)
// // runs the callback function after 2000(2sec);

// const callback =()=>{
//     console.log("this is outer callback function");
// }
// console.log(callback,1000);
// //  runs the callback function after 1000(1sec);

//  const id = setInterval(()=>{
// console.log("this function is running in every 3sec")
// },3000)

// clearInterval(id)
// setTimeout(()=>{
//  clearInterval(id);
// },3000*4)
// it run 3 time in node
// it run in 4 time in browser

 //Promises -> If we give a set of code that it tell that whether the program is successfully run or failure(fail to run) , it is asynchronous
// three states
// resolve:-sucess
// reject:-failure
// pending

// *
// let b=10;
// const  myPromise = new Promise((resolve,reject)=>{
//     //resolve reject = callback functions
//     let num = Math.random()*10
//     if(num<5){
//         resolve(num)
//     }
//     else{
//         reject(num)
//     }
// })
// myPromise.then((data)=>{
//     console.log("promise resolve",data);
// }).catch((error)=>{
//     console.log("promise rejected",error);
// });
// console.log(b);

// *
// const myNewPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("this is a promise which is resolve after 2s");
//       resolve();
//     },2000)
// })
// console.log(myNewPromise);
// myNewPromise.then(()=>{
//     console.log("promise resolved");
// })
// console.log(myNewPromise);

// chaining in promise

// const chainPromise = new Promise((resolve,reject)=>{
//     let num = Math.random()*100
//     if(num<50){
//         resolve(num)
//     }
//     else{
//         reject(num)
//     }
// })
//   chainPromise.then((data)=>{
// if(data <25){
//     return `num is less than 25 ${data}`;
// }else{
//     return `num is greater than 25 ${data}`;
// }
// }).then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log("object");
// })

// // async function
// let a=10
// async function fun(){
// console.log("async funtion start");
// }
// let result1;
// const arrowFun = async ()=>{
// console.log("async  arrow funtion");
// // let res = await fetch("https://randomuser.me/api/");
//     // result1 =  await res.json();

//     let res = await axios.get("https://randomuser.me/api/")
//     // axios help us to run our api like fetch
//     result1=res.dara;
//     console.log(result1);
//     console.log("async  arrow funtion end");
// }
// fun();
// arrowFun();
// console.log(result1);
// console.log(a);


/*Practice question
Question -1*/
let menu = [
    "roti", "rice" ,"eggrice" , "paneer" ,"dal" ,"egg-curry" , 
    "chicken" ,"chicken-rice" ,"gajar-ka-halwa" ,"gulab-jamunn",
    "dal makhni",] 

let nonVegItems = menu.filter(item => {
    if (item.includes("egg") || item.includes("chicken")) {
        return true; 
    } else {
        return false; 
    }
});

let vegItems = menu.filter(item => {
    if (item.includes("egg") || item.includes("chicken")) {
        return false; 
    } else {
        return true; 
    }
});

console.log("Veg Items:", vegItems);
console.log("Non-Veg Items:", nonVegItems);



//Q. Filter out all the products which are white and wearable
let products = [
  {
    name: "product 1 name",
    category: "wearable",
    color: ["red", "white"]
  },
  {
    name: "product 2 name",
    category: "playable",
    color: ["black", "silver"]
  },
  {
    name: "product 3 name",
    category: "wearable",
    color: ["blue", "white"]
  },
  {
    name: "product 4 name",
    category: "playable",
    color: ["white", "gray"]
  },
  {
    name: "product 5 name",
    category: "playable",
    color: ["gold", "black"]
  },
  {
    name: "product 6 name",
    category: "wearable",
    color: ["orange", "black"]
  },
  {
    name: "product 7 name",
    category: "wearable",
    color: ["purple", "pink"]
  }
];

let whiteWearableProducts = products.filter(product => 
  product.category === "wearable" && product.color.includes("white")
);

console.log(whiteWearableProducts);