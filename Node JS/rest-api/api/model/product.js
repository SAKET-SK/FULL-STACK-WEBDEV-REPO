// Models are responsible for creating and reading documents from the underlying MongoDB database. 
// Here we are going to create a Model.

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({     // Structure required
    _id: Schema.Types.ObjectId,
    name: {type:String, require:true},
    price: {type:String, require:true}
})

module.exports = mongoose.model("Product", productSchema)   // "Product" is a model name