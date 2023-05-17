// To demonstrate http server

const http = require('http');

const server = http.createServer((req,res)=>{
    // res.write("Welcome to this work environment")   // Will be visible to user beacuse it will be printed on client side
    // res.end("Hope you will enjoy development")
    if(req.url == '/' || req.url == '/home'){
        res.write("<html> <body> Welcome to this work environment. <br/> You are viewing home page </body> </html>")
    }
    else if(req.url == '/about'){
        res.write("This is a development server where you can manage your backend operations. <br/> This is all about me")
    }
    else if(req.url == '/services'){
        res.write("Want to know what I can do. Stay tuned.")
    }
})

server.listen(5555,()=>{
    console.log("Server started at port 5555")   // When server runs, it will be printed on server side; will not be visible to user of the site
})