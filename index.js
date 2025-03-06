var path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const staticPath = path.join(__dirname,"../express/public");
console.log(staticPath);
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    //console.log(staticPath);
    
    res.send();
    //res.send("this is testing home page");
})

app.get('/test',(req,res)=>{
    //console.log(staticPath);
    res.send("this is testing  page");
})

app.get('/about',(req,res)=>{
    res.json(
     [
        {
            id:1,
            name: "Harish"
        },
        {
            id:2,
            name: "Harshit"
        }
    ]
    );
})
app.get('/contact',(req,res)=>{
    res.write("<h1>This is testing contact page</h1>");
    res.send();
})
app.listen(port,()=>{
 console.log(`server started on port ${port}`);
})
