import mongoose from "mongoose";

const movie_schema = mongoose.Schema({
  movie_name: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  actors: {
    type: Array,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  banner: {
    type: Array,
    required: true,
  },
});

export const MovieModel = mongoose.model("movies", movie_schema);
