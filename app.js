//let ejs=require('ejs');
const express=require('express');
const bodyParser=require('body-parser')
const app=express();
var items=["Wake up","Refresh yourself","start coding"];
const port=3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.get("/",(req,res)=>{
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);
    
    res.render("list",{kindofday: day, newlistitem: items}); 
})
app.post("/saveData",(req,res)=>{
    var item=req.body.newitem;
    items.push(item);
    res.redirect("/")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.listen(port,()=>{
    console.log("this port is running");
})