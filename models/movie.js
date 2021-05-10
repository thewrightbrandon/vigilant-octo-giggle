///////////////////////
// Dependencies
///////////////////////
const mongoose = require('mongoose')

///////////////////////
// Schema
///////////////////////
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema)

///////////////////////
// Export
///////////////////////
module.exports = Movie;