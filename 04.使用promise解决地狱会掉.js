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
            if (err) return reject(err)

            resolve(datastr)
        })
    })
  
    
}
// 这是错误的示范
// getFileByPath(path.join(__dirname,'./files/2.txt'))
//     .then(function(data){
//         console.log(data)
//         getFileByPath(path.join(__dirname,'./files/1.txt'))
//             .then(function(data){
//                 console.log(data)
//             })
//             getFileByPath(path.join(__dirname,'./files/3.txt'))
//                 .then(function(data){
//                     console.log(data)
//     })
//     })

// getFileByPath(path.join(__dirname,'./files/12.txt'))
//     .then(function(data){
//         console.log(data)
//         return getFileByPath(path.join(__dirname,'./files/1.txt'))
//     },function(err){
//         console.log("failed" + err.message)
//         return getFileByPath(path.join(__dirname,'./files/1.txt'))
//     })
//     .then(function(data){
//         console.log(data)
//         return getFileByPath(path.join(__dirname,'./files/3.txt'))
//     })
//     .then(function(data){
//         console.log(data)})

// console.log("ok ok ok")

getFileByPath(path.join(__dirname,'./files/12.txt'))
    .then(function(data){
        console.log(data)
        return getFileByPath(path.join(__dirname,'./files/1.txt'))
    })
    .then(function(data){
        console.log(data)
        return getFileByPath(path.join(__dirname,'./files/3.txt'))
    })
    .then(function(data){
        console.log(data)})
    .catch(function(err){
        console.log(err.message)
    })
