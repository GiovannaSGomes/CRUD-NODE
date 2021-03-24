const mongoose = require('mongoose');

module.exports = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log('Server Connected!')
    }).catch(err => console.log(err.message));

    mongoose.connection.on('connected', () => {
        console.log('mongoose conneted to the database');
    });

    mongoose.connection.on('error', () => {
        console.log(error.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose is disconnected!');
    });

}