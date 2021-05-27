const express = require('express');
const ItemRoute = require('./Routes/Item.route');
const createErros = require('http-errors');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000


// initialize DB
require('./initDB')();

app.use('/items', ItemRoute);

//Error handler
app.use((req, res, next) => {
    next(createErros(404, "Sorry, we could not find the page required!"));
});

app.use((err, req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept")
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(PORT, (req, res) => {

    console.log('Running on PORT ' + PORT);

});