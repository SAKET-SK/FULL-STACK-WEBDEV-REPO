const express = require('express')
const router = express.Router()

// Handle GET requests for products i.e. send me the list of all available products {READ}
router.get('/',(req,res)=>{
    res.status(200).json({
        msg: "This is a GET request for products"
    })
})

// Handle POST requests for product i.e. I want to create a new product {CREATE}
router.post('/',(req,res)=>{

    // Body Parser will make following properties available
    // console.log(req.body)
    // console.log(req.body.name)
    // console.log(req.body.price)

    // Temp JSON object
    const tempProduct = {
        name: req.body.name,
        price: req.body.price
    }

    res.status(200).json({
        msg: "This is a POST request for products",
        statusMsg: "Product Added",
        product: tempProduct
    })
})

// Handle GET requests for SINGLE product
router.get('/:productId',(req,res)=>{

    const id = req.params.productId

    if(id == 999){
        res.status(200).json({
            msg: "999 IS A SPECIAL ID"
        })
    }
    else{
        res.status(200).json({
            msg: "A REGULAR ID, NOTHING SPECIAL"
        })
    }
    
})

// Handle PUT requests i.e I want to make some changes to data of the product {UPDATE}
router.put('/:productId',(req,res)=>{

    const id = req.params.productId

    res.status(200).json({
        msg: "This is a PUT request for products",
        id: id
    })

})

// Handle DELETE requests i.e I want to remove a product {DELETE}
router.delete('/:productId',(req,res)=>{

    const id = req.params.productId

    res.status(200).json({
        msg: "This is a DELETE request for products",
        id: id
    })

})

module.exports = router