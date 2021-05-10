///////////////////////
// Dependencies
///////////////////////
const mongoose = require('mongoose')

///////////////////////
// Schema
///////////////////////
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: String, required: true },
    genre: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema)

///////////////////////
// Export
///////////////////////
module.exports = Movie;