const http=require("http");
const fs=require("fs");
const server= http.createServer((req, res)=>{
    if(req.url=="/"){
        res.end("This is my first app on Node Js")
    }
    else if(req.url==="/download"){
        res.end("this is download page");
    }
    else if(req.url==="/about"){
        res.end(fs.readFileSync("api.json", "utf-8"));
        
        
    }
    else{
        res.end("404 page")
    }
  
})

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})