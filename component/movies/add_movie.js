import { MovieModel } from "../../models/movies_model.js";

const AddMovieComp = async (req, res) => {
  try {
    const {
      movie_name,
      producer,
      year,
      status,
      actors,
      plot,
      poster,
      banner,
      language,
      category,
    } = req.body;

    //Check - movie already exist
    const movie = await MovieModel.findOne({ movie_name });
    if (movie) {
      return res.status(403).json({ message: "Movie already exist" });
    }
    //Add new movie
    const new_movie = await MovieModel({
      movie_name,
      producer,
      year,
      status,
      actors,
      plot,
      poster,
      banner,
      language,
      category,
    }).save();

    res.status(201).json({ message: "Movie added successfully!", new_movie });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default AddMovieComp;
