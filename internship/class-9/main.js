//  -----------------------Document Object Model-------------------------------
//     *selectors : 1.getelementsByTagName :- returns list of all element
//     2.getelementsByClass  :- returns list of all element
//     3.getelementById  :-  returns single element
//     4. queryselector("tag name , .class name , #id name ") return the first or single  element
//     5. queryselectorAll("tag name , .class name , #id name ") return all elements

// *Getters  we use this to extract the text
// 1) innerText,innerhtml,textContent
// 2) .id , .className , getAttribute()

// *Setters
// 1) innerText = "some other value"
// 2) setAttribute("attribute","value")

// *create element in js:-
// const val = "hello paragraph";
// const div = document.createElement("div");

// div.className = "cl1 cl2";
// div.id = "dynamic.container";
// div.innerHTML = `<p>${val}</p><p>${val}</p>`;
// console.log(div);


// *Push element in html:-
// 1) append(push text && element too)
// 2) appendChild(push element)

// container.append(div);
// container.prepend(div);
// container.after(div);
// container.before(div);

// *eventListners
// event :- action perform by a user on web page e.g:->"click","mousehover","submit","scroll",etc.
// listners-> which listners to an event contnously and perform a function when event triger.



// const allParagraphs = document.getElementsByTagName("p"); //<p>Hello 1</p> This selects all <p> (paragraph) tags
// console.log(allParagraphs); // prints [p, p]
// console.log(allParagraphs[1]); //Prints the second <p> element
// const classElements = document.getElementsByClassName("para");
// console.log(classElements);

// const singleElement = document.getElementById("head2");
// console.log(singleElement);

// ** What is querySelector()?
// document.querySelector() is used to select the first element that matches a CSS-style selector.
// It returns only one element (the first match), or null if nothing matches**

// const elementByQuery = document.querySelector("p");// selects the first <p> tag
// const elementQuery = document.querySelector(".para2");//select the element with class "para2"
// const elementByQue = document.querySelector("#head2");//selects the element with ID "head2"
// console.log(elementByQue,elementByQuery,elementQuery);

// const elementsQuery = document.querySelectorAll("para2");// select all elements
// console.log(elementByQuery);

const container=document.getElementById("container");

// console.log(container.innerHTML);//<p>Hello</p><h2>Bye</h2>
// console.log(container.innerText);//Hello
// console.log(container.textContent);

//container.innerText = "this is changed by <h1>js</h1>"//The tag <h1> treated as plain text.
//container.innerHTML = "this is changed by <h1>js</h1>";// js will appear as a real <h1> heading.

// console.log(container.id,container.className);
// container.className = "background";//replaces all existing classes with "background"
// container.setAttribute("id","containerByjs");//id from "container" to "containerByjs".
// console.log(container.id);

// elementByQuery.classList.add("cl4");
// elementByQuery.classList.remove("cl3");
// // toggle if class is same class is present then it delete that class if not then it add te class
// elementByQuery.classList.toggle("cl4");
// elementByQuery.classList.toggle("cl5");

// console.log(elementByQuery.classList);
// console.log(container.children[1].parentElement);//parent, which is container itself.
// console.log(container.children[1].nextSibling);///n = text
// console.log(container.children[1].nextElementSibling);//next element(ignores text)next actual tag.
// console.log(container.children[1].previousElementSibling);

// container.children[1].nextElementSibling.innerText = "this is changed by js";

// -------------same as-------------
//<div class="cl1 cl2" id="dynamic.container">
 // <p>hello paragraph</p>
  //<p>hello paragraph</p>
//</div>
// -------------same as-------------
const val = "hello paragraph";
const div = document.createElement("div");
div.className = "cl1 cl2";
div.id = "dynamic.container";
div.innerHTML = `<p>${val}</p><p>${val}</p>`;
container.append(div);//Inside as last child
// append is same as push it push in last
container.prepend(div);//Inside as first child
container.after(div);//		After the div
container.before(div);//Before the div
console.log(div);