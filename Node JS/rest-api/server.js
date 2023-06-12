require('dotenv').config()   // So env variables are made avaialable using process keyword
const http = require('http');

const port = process.env.port;
const host = process.env.host;

const app = require('./app')

// const server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.write("Hello World")
//         res.end()
//     }
// })

const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`Server started at http://${host}:${port}`)
})