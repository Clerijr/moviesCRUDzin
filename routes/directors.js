var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
require('../models/director')
const Director = mongoose.model('director')
var jsonParser = require('body-parser').json()

/* GET directors listing. */
router.get('/', (req, res) => {
  Director.find((error, directors) => {
    if (error) res.send('There\'s an error fetching the table: '+error)
    res.send(directors)
  })
})
/* GET director by ID. */
router.get('/:id', (req, res) => {
  Director.findOne({_id: req.params.id})
  .then((director) => {
    res.send(director)
  })
  .catch(error => res.send('There\'s an error fetching the director: '+error))
})
/* CREATE director. */
router.post('/', jsonParser, (req, res)=> {
  const director = new Director({
    name: req.body.director_name,
    nationality: req.body.director_nationality,
    age: req.body.director_age,
    awards: req.body.director_awards,
  }).save().then(()=>{
      res.redirect('/')
  }).catch((err)=>{
      res.send(err)
  })
})
/* UPDATE director by ID. */
router.put('/:id', jsonParser, (req, res)=> {
  Director.findById({_id: req.body.id}, (error, director) => {
    if(error) res.send('There\'s and error while updating the movie: ' + error)
    director.name = req.body.director_name,
    director.nationality = req.body.director_nationality,
    director.age = req.body.director_age,
    director.awards = req.body.director_awards
    director.save().then(()=>{
      res.send('Director '+req.body.director_name+' updated')
    }).catch((error)=> {
      res.send('There\'s and error while updating the director: ' + error)
    })
  })
})
/* DELETE director by ID. */
router.delete('/:id', (req, res) => {
  Director.deleteOne({_id: req.params.id})
  .then(()=> {
    res.send('The director '+req.params.id+' has been deleted')
  })
  .catch((error)=> {
    res.send('There was an error trying to remove the director: '+error)
  })
})

module.exports = router;