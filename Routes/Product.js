const router = require('express').Router();
const products = require('../Controlleurs/Product');
  
    


    // Create a new Product
    router.post('/products', products.create);

    // Retrieve all Products
    router.get('/products', products.findAll);

    // Retrieve a single Product with productId
    router.get('/products/:productId', products.findOne);

    // Update a Note with productId
    router.put('/products/:productId', products.update);

    // Delete a Note with productId
    router.delete('/products/:productId', products.delete);
module.exports = router