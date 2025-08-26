const express = require("express");
const app = express();
const path = require("path")
const PORT = 4000;

const TODOS = [ //array
    {
        task: "this is task 1",//task->object=>string
        completed: false  //boolan
    }
]
// Middleware:- (app.get),(app.use)
// Middleware in Express is like a function that runs before your route handlers. 

app.use(express.static(path.join(__dirname, "public")))
//express.static=>This serves static files (HTML, CSS, JS, images) from the public folder
// __dirname=>absolute path of the current directory
// path.join(__dirname, "public") makes sure the path works on all operating systems.
// If you have public/index.html, it will be accessible at http://localhost:4000/index.html
//                     |_> __dirname :-> current file

app.use(express.json());
// data come from postman or fatch express.json -> make available data in req.body or req.query

app.use(express.urlencoded({ extended: true }));
//server read data from HTML form and convert it into str-{ name: "Neha", age: "20" }
//(extended: true):->form can also send arrays like { hobbies: ["dance", "code"] }

app.get("/add-todo", (req, res) => {
    res.redirect("settodoform.html")
    // it redirects them to settodoform.html inside public folder if we use (express.static)
    //http://localhost:4000/settodoform.html 
})

app.post("/add-todo", (req, res) => {
    //listen for post method at /add-todo from a form
    console.log(req.body);
    const task = req.body.task;
    TODOS.push(
        { task: task, completed: false })
    res.redirect("/all-todos")

})

app.get('/all-todos', (req, res) => {
    res.status(200).json({TODOS});
    // 200-ok json({TODOS}-send response in json format->string
});
 console.log(process.env.DATABASE_URL)

app.listen(PORT, () => {
    console.log("Server is running on port"+ PORT)
});