const express = require('express');    // Get reference to express function
const app = express();             // call express function to create an application

app.use(logger);  // To inform to use logger middleware we created
app.use(authentictor)

// Logger middleware
function logger(req,res,next){
    console.log('Request Received....' + req.url);
    next()
}

// Authenticator middleware
function authentictor(req, res, next){
    console.log('Request Authentication....')
    next()
}

// The so called "CONTROLLER"
app.get('/', (req, res) =>{
    res.send('This is a Home Page')
})
app.get('/users', (req, res) =>{
    res.send('This is a User Page')
})
app.listen(1111, () =>{
    console.log('Express-Server started at port 1111')
})