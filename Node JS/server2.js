const http = require('http');
const fs = require('fs');

// This part below is refered to as Controller
const server = http.createServer((req,res)=>{
    if(req.url == '/' || req.url == '/home'){
        res.setHeader('content-type', 'text/html');
        res.statusCode = 200;
        const stream = fs.createReadStream(__dirname + "/index.html",'utf-8');
        stream.pipe(res);
    }
    else if(req.url == '/about'){
        res.setHeader('content-type', 'text/html');
        res.statusCode = 200;
        const stream = fs.createReadStream(__dirname + "/about.html",'utf-8');
        stream.pipe(res);
    }
    else if(req.url == '/service'){
        res.setHeader('content-type', 'text/html');
        res.statusCode = 200;
        const stream = fs.createReadStream(__dirname + "/services.html",'utf-8');
        stream.pipe(res);
    }
    else if(req.url == '/products'){
        var product = {
            id: 1001,
            name: "CarryBag",
            price: 20,
            mfg: 2021,
            desc: "A CarryBag used to carry items"
        }
        // No more writing after res.end is allowed 
        res.end(JSON.stringify(product));
        // If we write only product, then it will fetch us nothing, We need to convert this JSON object into String
    }
})

server.listen(2222, () => {
    console.log("Listening on http://localhost:2222");
})