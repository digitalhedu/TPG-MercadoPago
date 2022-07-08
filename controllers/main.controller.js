const {index,one} = require('../models/product.model');

module.exports ={
    index: (req,res) => res.render('home',{
        products:index(),
        styles:['home']
    }),
    // Step 3
    addCart: (req,res) => {
        // Find Product in DB
        // let product = ???
        // Check product exist in cart
        // Case 1: Exist and update quantity
        // Case 2: Add cart and set quantity
        return res.send("Add a new product")
    },
    // Step 5
    updateCart: (req,res) => {
        // Check quantity
        // Case 1: Is equal to zero then remove product
        // Case 2: Update all cart items setting quantity in product selected
        return res.send("Update quantity")
    }, 
    // Step 6
    removeCart: (req,res) =>{
        return res.send("Remove a product from the cart")
    }
}