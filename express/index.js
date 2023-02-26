const express=require('express');
const app=express();
const path=require("path");

// const dirpath= path.join(__dirname, 'public')
// app.use(express.static(dirpath))

app.set("view engine", "ejs");
console.log(app.get("view engine"));
console.log(path.join(__dirname), "views");

app.get("/", (req, res)=>{
    // res.send(`<h1>This is my first express js app</h1>`)
 res.render("index", {title:"this is index file"})
})

app.get("/about", (req, res)=>{
    res.send(`
    
    <form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br>
  <input type="submit" value="Submit">
</form>

    `)
})

app.get("/download", (req, res)=>{
    // res.download(`${dirpath}/home.html`)
    res.render("home", {title:"This is home file"})
})
app.listen(3000, ()=>{
    console.log("Server is started at 3000 port")
})