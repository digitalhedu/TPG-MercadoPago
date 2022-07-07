const {index,one} = require('../models/product.model');

module.exports ={
    index: (req,res) => res.render('home',{
        products:index(),
        styles:['home']
    }),
    addCart: (req,res) => res.send("Add a new product"),
    updateCart: (req,res) => res.send("Update quantity"),
    removeCart: (req,res) => res.send("Remove a product from the cart"),
}