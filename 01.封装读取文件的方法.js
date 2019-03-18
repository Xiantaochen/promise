const fs = require("fs")
const path = require("path")

// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,datastr)=>
//  {
//     if (err) throw err
//     console.log(datastr)
//  }
// )

function getFileByPath(fpath,callback){
    
    fs.readFile((fpath),'utf-8',(err,datastr)=>
    {
    if  (err) return callback (err)
    // console.log(datastr)
    callback(null,datastr)
    }
    )
}

getFileByPath(path.join(__dirname,'./files/1.txt'),(err,datastr)=>{
    if (err) return console.log(err.message)
    console.log(datastr)
})