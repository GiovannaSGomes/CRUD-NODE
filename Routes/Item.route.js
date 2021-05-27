const { response } = require('express');
const express = require('express');
const router = express.Router();
const ItemController = require('../Controllers/Item.Controller');

//GET route
router.get('/', ItemController.getAllItems);

//POST route
router.post('/', ItemController.createNewItem);

//List by ID
router.get('/:id', ItemController.findItemById);

//Update by ID
router.patch('/:id', ItemController.updateItem);

//Delete by ID
router.delete('/:id', ItemController.deleteItem);


module.exports = router;