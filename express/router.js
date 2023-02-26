const express=require("express");
const router=express.Router();
const app=express();
const middleware=require("./middleware")

//router.use(middleware)
router.get("/",middleware, (req, res)=>{
    // res.send(`<h1>This is my first express js app</h1>`)
 res.render("index", {title:"this is index file"})
})

router.get("/about", (req, res)=>{
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



module.exports=router;