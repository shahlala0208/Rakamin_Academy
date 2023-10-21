const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genres: String,
  year: String,
  photo: String,
});

module.exports = mongoose.model('Movie', movieSchema);
