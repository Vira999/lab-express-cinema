const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, unique: true },
    director: String,
    stars: String,
    movieImage: String,
    description: String,
    showtimes: Number
  },
  {
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
