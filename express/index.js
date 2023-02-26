const express=require('express');
const app=express();
const path=require("path");
const router=require("./router")


// const dirpath= path.join(__dirname, 'public')
// app.use(express.static(dirpath))

app.set("view engine", "ejs");
// console.log(app.get("view engine"));
// console.log(path.join(__dirname), "views");

app.use(router)

app.listen(3000, ()=>{
    console.log("Server is started at 3000 port")
})
