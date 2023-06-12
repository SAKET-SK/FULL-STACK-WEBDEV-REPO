const fs = require('fs')

const sourceStream = fs.createReadStream(__dirname+"/data1.txt","utf-8")
const destStream = fs.createWriteStream(__dirname+"/stream-output.txt","utf-8")

sourceStream.on("data",(chunk) => {
    console.log(chunk)
    destStream.write(chunk)
})

// Using pipes
sourceStream.pipe(destStream)