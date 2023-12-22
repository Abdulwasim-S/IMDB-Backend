import { MovieModel } from "../../models/movies_model.js";

const UpdateMovieComp = async (req, res) => {
  try {
    const {
      _id,
      movie_name,
      producer,
      year,
      status,
      actors,
      plot,
      poster,
      banner,
      language,
    } = req.body;

    //Check - movie exist or not
    const movie = await MovieModel.findOne({ _id });
    if (!movie) {
      return res.status(404).json({ message: "Movie doesn't exist" });
    }
    //Update movie
    const updated_movie = await MovieModel.updateOne(
      { _id: id },
      {
        $set: {
          movie_name,
          producer,
          year,
          status,
          actors,
          plot,
          poster,
          banner,
          language,
        },
      }
    );

    res
      .status(202)
      .json({ message: "Movie Updated successfully!", updated_movie });
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error", error });
  }
};

export default UpdateMovieComp;
