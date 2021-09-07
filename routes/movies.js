var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
require('../models/movie')
const Movie = mongoose.model('movie')
var jsonParser = require('body-parser').json()

/* GET movies listing. */
router.get('/', (req, res) => {
  Movie.find((error, movies) => {
    if (error) res.send('There\'s an error fetching the table: '+error)
    res.send(movies)
  })
})
/* GET movie by ID. */
router.get('/:id', (req, res) => {
  Movie.findOne({_id: req.params.id})
  .then((movie) => {
    res.send(movie)
  })
  .catch(error => res.send('There\'s an error fetching the movie: '+error))
})
/* CREATE movie. */
router.post('/', jsonParser, (req, res)=> {
  const movie = new Movie({
      title: req.body.movie_title,
      director: req.body.movie_director,
      year: req.body.movie_year,
      stars: req.body.movie_stars,
      review: req.body.movie_review,
      gender: req.body.movie_gender
  }).save().then(()=>{
      res.redirect('/')
  }).catch((err)=>{
      res.send(err)
  })
})
/* UPDATE movie by ID. */
router.put('/:id', jsonParser, (req, res)=> {
  Movie.findById({_id: req.body.id}, (error, movie) => {
    if(error) res.send('There\'s and error while updating the movie: ' + error)
    movie.title = req.body.movie_title,
    movie.director = req.body.movie_director,
    movie.year = req.body.movie_year,
    movie.stars = req.body.movie_stars,
    movie.review = req.body.movie_review,
    movie.gender = req.body.movie_gender
    movie.save().then(()=>{
      res.send('Movie '+req.body.movie_title+' updated')
    }).catch((error)=> {
      res.send('There\'s and error while updating the movie: ' + error)
    })
  })
})
/* DELETE movieby ID. */
router.delete('/:id', (req, res) => {
  Movie.deleteOne({_id: req.params.id})
  .then(()=> {
    res.send('The movie '+req.params.id+' has been deleted')
  })
  .catch((error)=> {
    res.send('There was an error trying to remove the movie: '+error)
  })
})

module.exports = router;