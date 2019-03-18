const fs = require('fs')
const path = require('path')
// var promise = new Promise(function(){
//     fs.readFile(path.join(__dirname,'./files/2.txt'),'utf-8',(err,datastr)=>{
//         if (err) throw err
//         console.log(datastr)
//     })
// })


function getFileByPath(fpath){
    return new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,datastr)=>{
            // if (err) throw err
            // console.log(datastr)
            if (err) return PromiseRejectionEvent(err)

            resolve(datastr)
        })
    })
  
    
}

getFileByPath(path.join(__dirname,'./files/2.txt'))
    .then(function(data){
        console.log(data)
    },function(err){
        console.log(err.message)
    })