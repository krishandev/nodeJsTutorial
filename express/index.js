const express=require('express');
const app=express();
const path=require("path");

const dirpath= path.join(__dirname, 'public')
app.use(express.static(dirpath))

app.get("/", (req, res)=>{
    res.send(`<h1>This is my first express js app</h1>`)
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
    res.download(`${dirpath}/home.html`)
})
app.listen(3000, ()=>{
    console.log("Server is started at 3000 port")
})