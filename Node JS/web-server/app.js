require('dotenv').config()
const express = require('express')
const app = express()

// console.log(process.env.port)
// console.log(process.env.host)

const port = process.env.port
const host = process.env.host

app.use(express.static(__dirname+'/public'))   // Redirecting to middleware


app.get('/', (req, res) =>{
    res.send('ExpressJS works!!!')
})

app.get('/service', (req, res) =>{
    res.send('This is a Service Page')
})
app.get('/about', (req, res) =>{
    res.send('This is a About Page')
})
app.get('/contact', (req, res) =>{
    res.send('This is a Contact Page')
})

// Wildcard routing
app.get('*', (req, res) =>{
    res.send('Page not found')
})

app.listen(port, () =>{
    console.log(`Server started on http://${host}:${port}`)
})