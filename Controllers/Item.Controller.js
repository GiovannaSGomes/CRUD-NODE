const createError = require('http-errors');

const Item = require('../Models/Item.model');

module.exports = {

    //To list all the items inside the database
    getAllItems :  async (req, res, next) => {
    
        try {
            const result = await Item.find({}, { __v: 0 });
            res.send(result);
        } catch (error) {
            console.log(error.messsage);
        }
    
    },

    //To find an specific item by the id of it
    findItemById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const item = await Item.findById(id);
            
            if(!item){
                throw createError(404, "Item does not exist");
            }
    
            res.send(item);
        } catch (error) {
            console.log(error.messsage);
            next(error);
        }
    
    },

    //To insert a new item
    createNewItem : async (req, res, next) => {
        try {
            const item = new Item(req.body);
            const result = await item.save();
            res.send(result);      
        } catch(error) {
            console.log(error.messsage);
        }
    },

    //To update some item by id
    updateItem : async (req, res, next) => {
        try {
            //const id = req.params.id;
            //const update = req.body;
            //const options = {new: true}
    
            //const result = await Item.findByIdAndUpdate(id, update, options);
            
            
            //const dados = req.body;
            //const find = await Item.find();

            //res.send(result)
            
            console.log("Acessado");

            //res.send(dados)
            //console.log(dados);
            
        } catch (error) {
            console.messsage(error.messsage);
        }
    },

    //To delete some item by id
    deleteItem : async (req, res, next) => {
        const id = req.params.id;
    
        try {
            const result = await Item.findByIdAndDelete(id);
            res.send(result)
        } catch (error) {
            console.log(error.messsage);
        }
    
    }
};