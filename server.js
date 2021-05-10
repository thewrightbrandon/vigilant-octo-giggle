///////////////////////
// Dependencies
///////////////////////
const express = require('express');
const mongoose = require('mongoose')
const moviesController = require('./controllers/movies_controller.js');

///////////////////////
// Config
///////////////////////
const app = express();
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT;

///////////////////////
// Middleware
///////////////////////
app.use(express.json())
app.use(express.static('public'))

///////////////////////
// Controllers
///////////////////////
app.use('/movies', moviesController)

///////////////////////
// Routes
///////////////////////

///////////////////////
// Connections
///////////////////////
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on('error', err =>
    console.log(err.message, ' is Mongod not running?/Problem with Atlas Connection?'))
mongoose.connection.on('connected', () =>
    console.log('mongo connected: ', MONGODB_URI))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


///////////////////////
// Listener
///////////////////////
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});