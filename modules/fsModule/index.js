const fs=require("fs");
// fs.writeFile("file.txt","Data is added to file.txt", ()=>{
//     console.log("Data is sucessfully added");
// })

const test=fs.writeFileSync("file2.txt", "Data is added on file2.txt");
console.log(test);
fs.readFile("file.txt", "utf-8",(err, data)=>{
    console.log(data)
})

console.log("second console log")