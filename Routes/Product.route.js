const { response } = require('express');
const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/Product.Controller');


//GET rout
router.get('/', ProductController.getAllProducts);

//POST route
router.post('/', ProductController.createNewProduct);

//List by ID
router.get('/:id', ProductController.findProductById);

//Update by ID
router.patch('/:id', ProductController.updateAProduct);

//Delete by ID
router.delete('/:id', ProductController.deleteAProduct);


module.exports = router;

