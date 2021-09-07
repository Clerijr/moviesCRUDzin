const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: String,
    director: String,
    year: Number,
    stars: Number,
    review: String,
    gender: String
})

module.exports = mongoose.model('movie', movieSchema);