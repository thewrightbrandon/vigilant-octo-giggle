///////////////////////
// Dependencies
///////////////////////
const mongoose = require('mongoose')

///////////////////////
// Schema
///////////////////////
const movieSchema = new mongoose.Schema({
    name: { Type: String, required: true },
    image: { Type: String, required: true },
    year: { Type: Number, required: true },
    genre: { Type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema)

///////////////////////
// Export
///////////////////////
module.exports = Movie;