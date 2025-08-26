// 

const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//middleware generic
// app.use(() => {
//     console.log("Hello from middleware");
// })
app.use((req, res, next) => {
    console.log("Hello from middleware");
    next(); // Yeh next handler ko call karega
});

app.use("/user", (req, res, next) => {
    console.log("Path-specific middleware for /user");
    next();
});

app.get("/contact", (req, res) => {
    console.log("hit api");
    res.redirect("contact.html");
})

app.get("/user", (req, res) => {
    res.send({ name: "Neha" });
})

app.get("/user", (req, res) => {
    // res.send("welcome again");
    return res.json({ name: "Neha again" })
    res.json({ name: "Neha again" })

})



app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/test",(req,res)=>{
    console.log(req.query);
    // res.send(201).send("ok");
     res.status(201).json({
        data:req.query
     })
})

app.post("/user", (req, res) => {
    console.log("form submitted")
    console.log(req.body);
    res.send("form submitted successfully")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);

});

