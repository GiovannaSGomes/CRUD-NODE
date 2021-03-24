const createError = require('http-errors');

const Product = require('../Models/Product.model');

module.exports = {

    //To list all the products inside the database
    getAllProducts :  async (req, res, next) => {
    
        try {
            //Lista todos os produtos
            const result = await Product.find({}, { __v: 0 });
            res.send(result);
        } catch (error) {
            console.log(error.messsage);
        }
    
    },

    //To find an specific product by the id of it
    findProductById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            
            if(!product){
                throw createError(404, "Product does not exist");
            }
    
            res.send(product);
        } catch (error) {
            console.log(error.messsage);
            next(error);
        }
    
    },

    //To insert a new product
    createNewProduct : async (req, res, next) => {
        try {
            const product = new Product(req.body);
            const result = await product.save();
            res.send(result);      
        } catch(error) {
            console.log(error.messsage);
        }
    },

    //To update some product by id
    updateAProduct : async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
    
            const result = await Product.findByIdAndUpdate(id, update, options);
    
            res.send(result)
            
        } catch (error) {
            console.messsage(error.messsage);
        }
    },

    //To delete some product by id
    deleteAProduct : async (req, res, next) => {
        const id = req.params.id;
    
        try {
            const result = await Product.findByIdAndDelete(id);
            res.send(result)
        } catch (error) {
            console.log(error.messsage);
        }
    
    }
};