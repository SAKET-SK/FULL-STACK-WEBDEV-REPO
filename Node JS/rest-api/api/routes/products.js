const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const mongoose = require('mongoose')
const productController = require('../controller/product.model')

// Handle GET requests for products i.e. send me the list of all available products {READ}
router.get('/', productController.getProducts)
// (req,res)=>{
//     res.status(200).json({
//         msg: "This is a GET request for products"
//     })
// })

// Handle POST requests for product i.e. I want to create a new product {CREATE}
router.post('/', productController.createProduct)

//(req,res)=>{

    // Body Parser will make following properties available
    // console.log(req.body)
    // console.log(req.body.name)
    // console.log(req.body.price)

    // 1) Create an OBJECT of the MODEL
    // const product = new Product({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     price: req.body.price
    // })

    // 2) Save this to MongoDB Database
    // product.save()
    // .then((res)=>{
    //     console.log(res)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    // // Temp JSON object
    // const tempProduct = {
    //     name: req.body.name,
    //     price: req.body.price
    // } 

//     res.status(200).json({
//         msg: "This is a POST request for products",
//         statusMsg: "Product Added",
//         product: product      //tempProduct
//     })
    
// })

// Handle GET requests for SINGLE product
router.get('/:productId',productController.getProductByID)
// (req,res)=>{

//     const id = req.params.productId

//     if(id == 999){
//         res.status(200).json({
//             msg: "999 IS A SPECIAL ID"
//         })
//     }
//     else{
//         res.status(200).json({
//             msg: "A REGULAR ID, NOTHING SPECIAL"
//         })
//     }
    
// })

// Handle PUT requests i.e I want to make some changes to data of the product {UPDATE}
router.put('/:productId', productController.updateProduct)
// (req,res)=>{

//     const id = req.params.productId

//     res.status(200).json({
//         msg: "This is a PUT request for products",
//         id: id
//     })

// })

// Handle DELETE requests i.e I want to remove a product {DELETE}
router.delete('/:productId', productController.deleteProduct)
// (req,res)=>{

//     const id = req.params.productId

//     res.status(200).json({
//         msg: "This is a DELETE request for products",
//         id: id
//     })

// })

module.exports = router