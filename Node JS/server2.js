const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == '/' || req.url == '/home'){
        res.setHeader('content-type', 'text/html');
        res.statusCode = 200;
        const stream = fs.createReadStream(__dirname + "/index.html",'utf-8');
        stream.pipe(res);
    }
})

server.listen(2222, () => {
    console.log("Listening on http://localhost:2222");
})