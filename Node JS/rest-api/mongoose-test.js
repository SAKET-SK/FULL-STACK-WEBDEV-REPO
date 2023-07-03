const mongoose = require('mongoose')

const uri = "mongodb+srv://saketkhopkar910:saket%40910@cluster0.sftltxg.mongodb.net/school"
// %40 in place of @ is because we get syntax error

mongoose.connect(uri)
.then(()=>{
    console.log("Connection Established")
})