// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const db = require ('./config');
const mongoose = require('mongoose');
const router = require('./Routes/Product');
// require('./Routes/Product')(app);
mongoose.Promise = global.Promise;





const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors( {
    origin: "http://localhost:3000",
    credentials: true
  }))
app.use(bodyParser.json())
app.use(router)
//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Product app"});
});
// Use Api routes in the App
app.use('/api', router);

// listen on port 7000
app.listen(7000, () => {
    console.log("Server is listening on port 7000");
});