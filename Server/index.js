const http=require("http");
const server= http.createServer((req, res)=>{
    if(req.url=="/"){
        res.end("This is my first app on Node Js")
    }
    else if(req.url==="/download"){
        res.end("this is download page");
    }
    else if(req.url==="/about"){
        res.end("this is about page");
    }
    else{
        res.end("404 page")
    }
  
})

server.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})