// e->store all info related to event
//  h1.addEventListener("click",()=>{
    // h1.classList.toggle("background");
// })
// If the element has the class background, it will remove it.
// If it doesn't have the class, it will add it.

const h1 = document.querySelector("h1");
// This selects the first <h1> tag in the HTML document and stores it in a variable named h1.
h1.addEventListener("click",(e)=>{
    // console.log(e.target);
    // it will print the exact element 
    h1.classList.toggle("background");
    console.log("h1 clicked");
})

// event bubling
h1.children[0].addEventListener("click",(e)=>{
    //h1.children[0] => This selects the first child inside the h1, which is <span>❌</span>.
    e.stopPropagation();
    console.log("span clicked");//parent’s click event won’t run.
    // input remove -> after click on span
    input.value ="";
})

// input text from user
const input = document.getElementById("textInp");//This selects the HTML element with the id="textInp".
input.addEventListener("change",(e)=>{
 // If you type something in the input,then click outside the input the change event is triggered.
   console.log(e.target.value);// gives the current text typed by the user.
})