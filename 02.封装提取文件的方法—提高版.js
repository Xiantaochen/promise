const fs = require("fs")
const path = require("path")

// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,datastr)=>
//  {
//     if (err) throw err
//     console.log(datastr)
//  }
// )

function getFileByPath(fpath,succCb,errcb){
    
    fs.readFile((fpath),'utf-8',(err,datastr)=>
    {
    if  (err) return errcb (err)
    // console.log(datastr)
    succCb(datastr)
    }
    )
}
// getFileByPath(path.join(__dirname,'./files/1.txt'),
// function(data){
//     console.log(data + 'successful')

// },
// function(err){
//     console.log("failed" +err.message)
// })
// 
getFileByPath(path.join(__dirname,'./files/1.txt'),function(data){
console.log(data)
    getFileByPath(path.join(__dirname,'./files/2.txt'),function(data){
        console.log(data)
        getFileByPath(path.join(__dirname,'./files/3.txt'),function(data){
            console.log(data)
        })
    
    
    })


})