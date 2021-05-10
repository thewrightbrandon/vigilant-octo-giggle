///////////////////////
// Dependencies
///////////////////////
const express = require('express');
const movies = express.Router();
const Movie = require('../models/movie.js');

///////////////////////
// Routes
///////////////////////

movies.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedMovie) => {
            if (err) {
                res.send(err);
            } else {
                Movie.find({}, (err, foundMovies) => {
                    res.json(foundMovies);
                });
            };
        }
    );
});

movies.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
        Movie.find({}, (err, foundMovies) => {
            res.json(foundMovies);
        });
    });
});

movies.get('/', (req, res) => {
    Movie.find({}, (err, foundMovies) => {
        res.json(foundMovies)
    });
});

movies.post('/', (req, res) => {
    Movie.create(req.body, (err, createdMovie) => {
        Movie.find({}, (err, foundMovies) => {
            res.json(foundMovies)
        });
    });
});

///////////////////////
// Export
///////////////////////
module.exports = movies;