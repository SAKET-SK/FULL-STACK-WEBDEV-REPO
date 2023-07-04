// We will handle things here with ASYNC/AWAIT

const mongoose = require('mongoose')
const Product = require('../model/product')

// C from CRUD [POST]
exports.createProduct = async (req,res) => {
    try{
        // Create product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })

        const data = await product.save()    // Response of await will be stores in the constant "data"
        // Roughly above statement means, call product.save and AWAIT until it returns!!!

        // If code execution reaches THIS POINT, that means product.save was a successful.
        res.status(200).json({
            msg: "Product Created Succesfully",
            product: data                          // "product" is the "data" that you receive from here
        })
    } catch(err){                // Catch the error in case AWAIT fails.
        res.status(501).json({
            code: 501,
            msg: "Something went wrong",
            err: err                  // Send error object back
        })
    }
}

// R from CRUD [READ]
exports.getProducts = async(req, res) => {
    try{
        const products = await Product.find();    // Get all the documents from the collection
        res.status(200).json({
            msg: "All Documents Fetched Successfully",
            data: products                // "data" is the list of "products" you will receive from here              
        })

    }catch(err){
        res.status(501).json({
            code: 501,
            msg: "Something went wrong",
            err: err                  // Send error object back
        })
    }
}

// R from CRUD [READ] but only read specific document not all!!
exports.getProductByID = async(req, res) => {
    try{
        const product = await Product.findById(req.params.productId);    // Get single document from the collection
        res.status(200).json({
            msg: "Document Fetched Successfully",
            data: product                // "data" is the "product" you will receive from here              
        })

    }catch(err){
        res.status(501).json({
            code: 501,
            msg: "Something went wrong",
            err: err                  // Send error object back
        })
    }
}

// U from CRUD [PUT] ; Update functionality
exports.updateProduct = async(req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.productId, req.body);    // Get document from the collection to update
        res.status(200).json({
            msg: "Document Updated Successfully",
            data: product                // "data" is the "product" you will receive from here              
        })

    }catch(err){
        res.status(501).json({
            code: 501,
            msg: "Something went wrong",
            err: err                  // Send error object back
        })
    }
}

// D from DELETE [DELETE] ; DELETE functionality
exports.deleteProduct = async(req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.productId);    // Get document from the collection for delete
        res.status(200).json({
            msg: "Document Deleted Successfully",
            data: product                // "data" is the "product" you will receive from here              
        })

    }catch(err){
        res.status(501).json({
            code: 501,
            msg: "Something went wrong",
            err: err                  // Send error object back
        })
    }
}