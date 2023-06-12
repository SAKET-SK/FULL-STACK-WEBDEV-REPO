require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')
const hbs = require('hbs')

// console.log(process.env.port)
// console.log(process.env.host)

const port = process.env.port
const host = process.env.host

app.use(express.static(__dirname+'/public'))   // Redirecting to middleware -> express.static()

// Configure the hbs template engine
const viewPath = path.join(__dirname, 'templates/views')
app.set('view engine', 'hbs')  // Telling ExpressJS that we are using hbs view engines
app.set('views', viewPath)  // This is where the views are

// Configure the partials (hbs)
const partialPath = path.join(__dirname, 'templates/partials')
hbs.registerPartials(partialPath)

app.get('/', (req, res) =>{
    // res.send('ExpressJS works!!!')
    res.render('index',{
        title: 'Home Page',
        author: 'Saket'
    })
})

app.get('/service', (req, res) =>{
    // res.send('This is a Service Page')
    res.render('service')
})
app.get('/about', (req, res) =>{
    // res.send('This is a About Page')
    res.render('about',{
        about: 'This page was developed using HBS template engine'
    })
})
app.get('/contact', (req, res) =>{
    // res.send('This is a Contact Page')
    res.render('contact')
})

// Wildcard routing
app.get('*', (req, res) =>{
    res.send('Page not found')
})

app.listen(port, () =>{
    console.log(`Server started on http://${host}:${port}`)
})