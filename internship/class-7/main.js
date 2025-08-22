let arr = [
    {
        name:"person 1",
        age:10,
        

    },
     {
        name:"person 2",
        age:21,

    },
     {
        name:"person 3",
        age:16,

    },
     {
        name:"person 4",
        age:23,

    },
     {
        name:"person 5",
        age:24,

    },

]

// add a new key "id" & its value to every object

let person = {
    name:"person",
    age:29,
    skills:["js","css"],

}

let newPerson ={
    ...person,
    profession:"dev",
    home:"panipat",

}
console.log(newPerson);

let numArr = [1,2,3,4,5];
// spread operator (...) is used to copy the content
let newNumArr = [...numArr,7,8,9,10]
console.log(newNumArr);

arr = arr.map((obj,index)=>{
return {...obj,
    // name:"changed name",
    id:index+1,
    salary:(index+1)*100000,
}
})
console.log(arr);

// iterator = person
let newArr = arr.filter((person)=>{
 return (person.age >=18);
})


console.log(newArr);

let salarySum = arr.reduce((accum,person)=>{
return accum + person.salary;
},0)

console.log(salarySum);

// find give only one value from a particular condition
let result = arr.find((person)=>{
    return (person.age <20);
})

console.log(result);

let ar = [1,2,3,4,5];
let sum = ar.reduce((accum,num)=>{
return num+accum;
// 1+0 =1(acc) 
// 2+1 =3=>(acc)
// 3+3 = 6
},0)


let multiply = ar.reduce((accum,num)=>{
return num*accum;
// 1*1 =1(acc) 
// 2*1 =2=>(acc)
// 3*2 = 6
},1)

console.log(sum),
console.log(multiply);

// foreach

ar.forEach((element)=>{
    console.log(element);
});

// asyn js :- dont wait for result of upper line of code.

// methods and functions
// 1.) setTimeout
// 2.) setInterval
// 3.) Promise
// 4.) async/await
