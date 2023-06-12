const fs = require('fs')

// Reading the file and printing on console (SYNCHRONOUSLY)
console.log("##### Welcome #####")
try{
    let contents = fs.readFileSync("data1.txt", "utf8");
    console.log(contents)
    
    // Copying the contents into another file
    fs.writeFileSync("copy_destination.txt", contents)   // where to copy, what to copy
    console.log("Data Copied Sucessfully")
}
catch(err){
    if(err.code === "ENOENT"){
        console.log("The requested file cannot be found")
    }
    else{
        throw err;
    }
}
console.log("##### Goodbye #####")

// Reading the file and printing on console (ASYNCHRONOUSLY)
console.log(">>> Hello...")
fs.readFile("data1.txt","utf-8", (err,data) => {    // Callback, there will be either error or data as an output
     if(data !== undefined){                        // if it is a data, then print on console and copy it to file
         console.log(data)
         fs.writeFile("file3.txt",data,(err)=>{     // pass the contents as in "data" variable
             console.log("Data copied to file3.txt")     
         })
     } else {
         console.log( err)
     }
 })
 console.log(">>> Bye...")