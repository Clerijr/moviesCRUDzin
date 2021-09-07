const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const directorSchema = new Schema({
    name: String,
    nationality: String,
    age: Number,
    awards: Array
})

module.exports = mongoose.model('director', directorSchema);