import { MovieModel } from "../../models/movies_model.js";

const MovieListComp = async (req, res) => {
  try {
    // Get all movies name with details
    const movies = await MovieModel.find();

    res.status(200).json({ message: "Movie list with data!", movies });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default MovieListComp;
