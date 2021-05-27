//imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    
    id: {
        type: String,
        required: true
        },
    
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

const item = mongoose.model('item', ItemSchema);

module.exports = item;