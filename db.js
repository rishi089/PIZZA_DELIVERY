const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://rishi:rishi@cluster0.cl7xt.mongodb.net/pizza-delivery';

mongoose.connect(mongoURL , {useUnifiedTopology: true , useNewUrlParser:true});

var db = mongoose.connection;

db.on('connected' , () =>{
console.log('Mongo DB Connection Successfully');
});

db.on('error' , () =>{
console.log('Mongo DB Connection failed');
});

module.exports = mongoose;
